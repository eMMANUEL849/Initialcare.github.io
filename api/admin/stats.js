const { getPool } = require('../../lib/db');
const { isAuthenticated } = require('../../lib/auth');

module.exports = async (req, res) => {
  if (!isAuthenticated(req)) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const pool = getPool();

    const [totalR, last7R, last30R, dailyR, byCategoryR] = await Promise.all([
      pool.query('SELECT COUNT(*)::int AS count FROM enquiries'),
      pool.query("SELECT COUNT(*)::int AS count FROM enquiries WHERE created_at >= now() - interval '7 days'"),
      pool.query("SELECT COUNT(*)::int AS count FROM enquiries WHERE created_at >= now() - interval '30 days'"),
      pool.query(`
        SELECT to_char(gs.day, 'YYYY-MM-DD') AS date, COALESCE(c.count, 0) AS count
        FROM generate_series(CURRENT_DATE - interval '29 days', CURRENT_DATE, interval '1 day') AS gs(day)
        LEFT JOIN (
          SELECT date_trunc('day', created_at) AS day, COUNT(*)::int AS count
          FROM enquiries
          WHERE created_at >= now() - interval '30 days'
          GROUP BY 1
        ) c ON c.day = gs.day
        ORDER BY gs.day
      `),
      pool.query(`
        SELECT COALESCE(NULLIF(enquiring_for, ''), 'Not specified') AS category, COUNT(*)::int AS count
        FROM enquiries
        GROUP BY 1
        ORDER BY count DESC
      `),
    ]);

    return res.status(200).json({
      total: totalR.rows[0].count,
      last7: last7R.rows[0].count,
      last30: last30R.rows[0].count,
      daily: dailyR.rows,
      byCategory: byCategoryR.rows,
    });
  } catch (err) {
    console.error('stats query failed', err);
    return res.status(500).json({ error: 'Failed to load stats.' });
  }
};
