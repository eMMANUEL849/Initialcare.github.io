const { getSession } = require('../_lib/auth');
const { getAdminById } = require('../_lib/admin');

module.exports = async (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const admin = await getAdminById(session.userId);
    if (!admin) return res.status(401).json({ error: 'Not authenticated' });
    return res.status(200).json({ username: admin.username, email: admin.email });
  } catch (err) {
    console.error('me failed', err);
    return res.status(500).json({ error: 'Failed to load admin info.' });
  }
};
