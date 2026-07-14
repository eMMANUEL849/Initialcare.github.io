const { getPool } = require('./db');

async function recordAttempt(scope, key) {
  const pool = getPool();
  await pool.query('INSERT INTO auth_attempts (scope, key) VALUES ($1, $2)', [scope, key]);
  // Opportunistic cleanup so the table doesn't grow unbounded.
  await pool.query("DELETE FROM auth_attempts WHERE created_at < now() - interval '1 day'");
}

async function isRateLimited(scope, key, { windowMinutes, maxAttempts }) {
  const pool = getPool();
  const { rows } = await pool.query(
    `SELECT COUNT(*)::int AS count FROM auth_attempts
     WHERE scope = $1 AND key = $2 AND created_at >= now() - ($3 * interval '1 minute')`,
    [scope, key, windowMinutes]
  );
  return rows[0].count >= maxAttempts;
}

function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return String(fwd).split(',')[0].trim();
  return (req.socket && req.socket.remoteAddress) || 'unknown';
}

module.exports = { recordAttempt, isRateLimited, getClientIp };
