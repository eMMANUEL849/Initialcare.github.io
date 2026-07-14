const crypto = require('crypto');
const { getPool } = require('./db');
const { hashPassword } = require('./auth');

const RESET_TOKEN_TTL_MS = 30 * 60 * 1000; // 30 minutes

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

async function getAdminByIdentifier(identifier) {
  const pool = getPool();
  const { rows } = await pool.query(
    'SELECT id, username, email, password_hash FROM admin_users WHERE lower(username) = lower($1) OR lower(email) = lower($1) LIMIT 1',
    [identifier]
  );
  return rows[0] || null;
}

async function getAdminById(id) {
  const pool = getPool();
  const { rows } = await pool.query(
    'SELECT id, username, email, password_hash FROM admin_users WHERE id = $1 LIMIT 1',
    [id]
  );
  return rows[0] || null;
}

async function updateAdminCredentials(id, { username, email, password }) {
  const pool = getPool();
  const fields = [];
  const values = [];
  let i = 1;

  if (username) { fields.push(`username = $${i++}`); values.push(username); }
  if (email) { fields.push(`email = $${i++}`); values.push(email); }
  if (password) { fields.push(`password_hash = $${i++}`); values.push(hashPassword(password)); }
  fields.push(`updated_at = now()`);

  values.push(id);
  await pool.query(`UPDATE admin_users SET ${fields.join(', ')} WHERE id = $${i}`, values);
}

async function createPasswordResetToken(adminId) {
  const pool = getPool();
  const rawToken = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);
  await pool.query(
    'INSERT INTO password_reset_tokens (admin_user_id, token_hash, expires_at) VALUES ($1, $2, $3)',
    [adminId, hashToken(rawToken), expiresAt]
  );
  return rawToken;
}

async function consumeResetToken(rawToken) {
  const pool = getPool();
  const tokenHash = hashToken(rawToken);
  const { rows } = await pool.query(
    `SELECT id, admin_user_id FROM password_reset_tokens
     WHERE token_hash = $1 AND used_at IS NULL AND expires_at > now()
     LIMIT 1`,
    [tokenHash]
  );
  const row = rows[0];
  if (!row) return null;

  await pool.query('UPDATE password_reset_tokens SET used_at = now() WHERE id = $1', [row.id]);
  return row.admin_user_id;
}

module.exports = {
  getAdminByIdentifier,
  getAdminById,
  updateAdminCredentials,
  createPasswordResetToken,
  consumeResetToken,
};
