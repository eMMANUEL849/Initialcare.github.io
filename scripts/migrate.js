// One-off schema setup, run locally with `node scripts/migrate.js` after `vercel env pull`.
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_]*)="?(.*?)"?$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const { hashPassword } = require('../lib/auth');

const pool = new Pool({ connectionString: process.env.POSTGRES_URL });

const sql = `
CREATE TABLE IF NOT EXISTS enquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  enquiring_for TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries (created_at DESC);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id SERIAL PRIMARY KEY,
  admin_user_id INTEGER NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS password_reset_tokens_token_hash_idx ON password_reset_tokens (token_hash);
`;

const SEED_USERNAME = process.env.ADMIN_USERNAME;
const SEED_EMAIL = process.env.ADMIN_EMAIL;
const SEED_PASSWORD = process.env.ADMIN_PASSWORD;

(async () => {
  await pool.query(sql);
  console.log('Schema ready: enquiries, admin_users, password_reset_tokens.');

  const { rows } = await pool.query('SELECT COUNT(*)::int AS count FROM admin_users');
  if (rows[0].count === 0) {
    if (SEED_USERNAME && SEED_EMAIL && SEED_PASSWORD) {
      await pool.query(
        'INSERT INTO admin_users (username, email, password_hash) VALUES ($1, $2, $3)',
        [SEED_USERNAME, SEED_EMAIL, hashPassword(SEED_PASSWORD)]
      );
      console.log(`Seeded initial admin user "${SEED_USERNAME}" <${SEED_EMAIL}>.`);
    } else {
      console.warn('Skipping admin seed: ADMIN_USERNAME, ADMIN_EMAIL, and ADMIN_PASSWORD must be set in .env.local.');
    }
  } else {
    console.log('admin_users already has rows — skipped seeding.');
  }

  await pool.end();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
