const { getSession, verifyPassword } = require('../../lib/auth');
const { getAdminById, updateAdminCredentials } = require('../../lib/admin');

module.exports = async (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(401).json({ error: 'Not authenticated' });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }
  const { currentPassword, newUsername, newEmail, newPassword } = body || {};

  if (!currentPassword) return res.status(400).json({ error: 'Enter your current password to confirm changes.' });
  if (newPassword && String(newPassword).length < 8) {
    return res.status(400).json({ error: 'New password must be at least 8 characters.' });
  }

  try {
    const admin = await getAdminById(session.userId);
    if (!admin || !verifyPassword(String(currentPassword), admin.password_hash)) {
      return res.status(401).json({ error: 'Current password is incorrect.' });
    }

    await updateAdminCredentials(admin.id, {
      username: newUsername ? String(newUsername).slice(0, 100) : undefined,
      email: newEmail ? String(newEmail).slice(0, 200) : undefined,
      password: newPassword ? String(newPassword) : undefined,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err && err.code === '23505') {
      return res.status(409).json({ error: 'That username is already taken.' });
    }
    console.error('update-credentials failed', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
