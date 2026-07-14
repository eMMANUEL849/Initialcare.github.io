const crypto = require('crypto');

const COOKIE_NAME = 'admin_session';
const DEFAULT_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
const REMEMBER_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function sign(payload) {
  return crypto.createHmac('sha256', process.env.ADMIN_SESSION_SECRET).update(payload).digest('hex');
}

function createSessionCookie(userId, remember) {
  const ttl = remember ? REMEMBER_TTL_MS : DEFAULT_TTL_MS;
  const expires = Date.now() + ttl;
  const payload = `admin.${userId}.${expires}`;
  const token = `${payload}.${sign(payload)}`;
  const isProd = process.env.VERCEL_ENV === 'production';
  const parts = [
    `${COOKIE_NAME}=${token}`,
    'HttpOnly',
    'Path=/',
    'SameSite=Strict',
    `Max-Age=${Math.floor(ttl / 1000)}`,
  ];
  if (isProd) parts.push('Secure');
  return parts.join('; ');
}

function clearSessionCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`;
}

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    out[pair.slice(0, idx).trim()] = pair.slice(idx + 1).trim();
  });
  return out;
}

function getSession(req) {
  if (!process.env.ADMIN_SESSION_SECRET) return null;
  const token = parseCookies(req.headers.cookie)[COOKIE_NAME];
  if (!token) return null;

  const parts = token.split('.');
  if (parts.length !== 4) return null;
  const [prefix, userIdStr, expiresStr, sig] = parts;
  const expected = sign(`${prefix}.${userIdStr}.${expiresStr}`);

  const sigBuf = Buffer.from(sig, 'hex');
  const expBuf = Buffer.from(expected, 'hex');
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) return null;

  const expires = Number(expiresStr);
  const userId = Number(userIdStr);
  if (!Number.isFinite(expires) || !Number.isFinite(userId) || Date.now() > expires) return null;

  return { userId, expires };
}

function isAuthenticated(req) {
  return getSession(req) !== null;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

function verifyPassword(password, stored) {
  const parts = String(stored || '').split('$');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;
  const salt = Buffer.from(parts[1], 'hex');
  const expected = Buffer.from(parts[2], 'hex');
  if (salt.length === 0 || expected.length === 0) return false;
  const actual = crypto.scryptSync(password, salt, expected.length);
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

module.exports = {
  createSessionCookie,
  clearSessionCookie,
  isAuthenticated,
  getSession,
  hashPassword,
  verifyPassword,
};
