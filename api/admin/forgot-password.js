const { getAdminByIdentifier, createPasswordResetToken } = require('../../lib/admin');
const { sendEmail } = require('../../lib/email');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }
  const identifier = (body || {}).identifier;

  if (!identifier) return res.status(400).json({ error: 'Enter your username or email.' });

  // Always return the same response whether or not the account exists, so
  // this endpoint can't be used to discover valid usernames/emails.
  const genericResponse = { ok: true, message: "If that account exists, we've sent a reset link." };

  try {
    const admin = await getAdminByIdentifier(String(identifier).slice(0, 200));
    if (admin) {
      const token = await createPasswordResetToken(admin.id);
      const resetUrl = `https://${req.headers.host}/admin/reset-password.html?token=${token}`;
      await sendEmail({
        to: admin.email,
        subject: 'Reset your Initial Care admin password',
        html: `<p>Someone requested a password reset for the Initial Care admin dashboard.</p><p><a href="${resetUrl}">Set a new password</a> (this link expires in 30 minutes).</p><p>If you didn't request this, you can safely ignore this email.</p>`,
        text: `Reset your Initial Care admin password: ${resetUrl} (expires in 30 minutes)`,
      });
    }
  } catch (err) {
    console.error('forgot-password failed', err);
  }

  return res.status(200).json(genericResponse);
};
