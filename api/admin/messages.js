const { getPool } = require('../../lib/db');
const { isAuthenticated } = require('../../lib/auth');

module.exports = async (req, res) => {
  if (!isAuthenticated(req)) return res.status(401).json({ error: 'Not authenticated' });
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 200);
  const offset = Math.max(parseInt(req.query.offset, 10) || 0, 0);

  try {
    const pool = getPool();
    const [{ rows }, { rows: countRows }] = await Promise.all([
      pool.query(
        'SELECT id, name, phone, email, enquiring_for, message, created_at FROM enquiries ORDER BY created_at DESC LIMIT $1 OFFSET $2',
        [limit, offset]
      ),
      pool.query('SELECT COUNT(*)::int AS count FROM enquiries'),
    ]);
    return res.status(200).json({ messages: rows, total: countRows[0].count });
  } catch (err) {
    console.error('messages query failed', err);
    return res.status(500).json({ error: 'Failed to load messages.' });
  }
};
