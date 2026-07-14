const { consumeResetToken, updateAdminCredentials } = require('../_lib/admin');
const { recordAttempt, isRateLimited, getClientIp } = require('../_lib/rateLimit');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  if (await isRateLimited('reset-password', ip, { windowMinutes: 60, maxAttempts: 10 })) {
    return res.status(429).json({ error: 'Too many attempts. Please try again later.' });
  }
  await recordAttempt('reset-password', ip);

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }
  const { token, password } = body || {};

  if (!token || !password) return res.status(400).json({ error: 'Missing token or password.' });
  if (String(password).length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters.' });

  try {
    const adminId = await consumeResetToken(String(token));
    if (!adminId) return res.status(400).json({ error: 'This reset link is invalid or has expired.' });

    await updateAdminCredentials(adminId, { password: String(password) });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('reset-password failed', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
