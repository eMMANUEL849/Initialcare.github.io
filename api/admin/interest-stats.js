const { isAuthenticated } = require('../_lib/auth');
const { getStats } = require('../_lib/adminQueries');

module.exports = async (req, res) => {
  if (!isAuthenticated(req)) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const stats = await getStats('career_interests', 'role');
    return res.status(200).json(stats);
  } catch (err) {
    console.error('interest stats query failed', err);
    return res.status(500).json({ error: 'Failed to load stats.' });
  }
};
