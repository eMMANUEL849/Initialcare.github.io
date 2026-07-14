const { getAdminByIdentifier } = require('../../lib/admin');
const { verifyPassword, createSessionCookie } = require('../../lib/auth');
const { recordAttempt, isRateLimited, getClientIp } = require('../../lib/rateLimit');

const WINDOW_MINUTES = 15;
const MAX_ATTEMPTS = 5;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  if (await isRateLimited('login', ip, { windowMinutes: WINDOW_MINUTES, maxAttempts: MAX_ATTEMPTS })) {
    return res.status(429).json({ error: 'Too many attempts. Please try again later.' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }
  const { username, password, remember } = body || {};

  if (!username || !password) {
    await recordAttempt('login', ip);
    await new Promise((r) => setTimeout(r, 400));
    return res.status(401).json({ error: 'Incorrect username or password.' });
  }

  try {
    const admin = await getAdminByIdentifier(String(username).slice(0, 200));
    const ok = admin && verifyPassword(String(password), admin.password_hash);
    if (!ok) {
      await recordAttempt('login', ip);
      await new Promise((r) => setTimeout(r, 400));
      return res.status(401).json({ error: 'Incorrect username or password.' });
    }

    res.setHeader('Set-Cookie', createSessionCookie(admin.id, !!remember));
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('login failed', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
