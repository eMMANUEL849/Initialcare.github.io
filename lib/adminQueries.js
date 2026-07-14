const { getPool } = require('./db');

const ALLOWED_STATUSES = ['new', 'contacted'];

// table and category/search column names below are always fixed string literals
// supplied by our own route files, never derived from request input, so
// interpolating them into SQL is safe (identifiers can't be parameterized).
function buildFilters({ q, searchColumns, status, from, to, extra }) {
  const conditions = [];
  const values = [];
  let i = 1;

  if (q && searchColumns && searchColumns.length) {
    const like = searchColumns.map((col) => `${col} ILIKE $${i}`).join(' OR ');
    conditions.push(`(${like})`);
    values.push(`%${q}%`);
    i++;
  }
  if (status && ALLOWED_STATUSES.includes(status)) {
    conditions.push(`status = $${i}`);
    values.push(status);
    i++;
  }
  if (from && !Number.isNaN(Date.parse(from))) {
    conditions.push(`created_at >= $${i}`);
    values.push(new Date(from).toISOString());
    i++;
  }
  if (to && !Number.isNaN(Date.parse(to))) {
    conditions.push(`created_at <= $${i}`);
    values.push(new Date(to).toISOString());
    i++;
  }
  if (extra) {
    for (const [column, value] of extra) {
      conditions.push(`${column} = $${i}`);
      values.push(value);
      i++;
    }
  }

  return {
    where: conditions.length ? `WHERE ${conditions.join(' AND ')}` : '',
    values,
    nextIndex: i,
  };
}

async function listItems(table, columns, { limit, offset, q, searchColumns, status, from, to, extra }) {
  const pool = getPool();
  const { where, values, nextIndex } = buildFilters({ q, searchColumns, status, from, to, extra });
  const { rows } = await pool.query(
    `SELECT ${columns.join(', ')} FROM ${table} ${where} ORDER BY created_at DESC LIMIT $${nextIndex} OFFSET $${nextIndex + 1}`,
    values.concat([limit, offset])
  );
  const { rows: countRows } = await pool.query(`SELECT COUNT(*)::int AS count FROM ${table} ${where}`, values);
  return { rows, total: countRows[0].count };
}

async function updateStatus(table, id, status) {
  if (!ALLOWED_STATUSES.includes(status)) throw new Error('Invalid status');
  const pool = getPool();
  await pool.query(`UPDATE ${table} SET status = $1 WHERE id = $2`, [status, id]);
}

async function deleteItem(table, id) {
  const pool = getPool();
  await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
}

async function getStats(table, categoryColumn) {
  const pool = getPool();
  const [totalR, last7R, last30R, dailyR, byCategoryR] = await Promise.all([
    pool.query(`SELECT COUNT(*)::int AS count FROM ${table}`),
    pool.query(`SELECT COUNT(*)::int AS count FROM ${table} WHERE created_at >= now() - interval '7 days'`),
    pool.query(`SELECT COUNT(*)::int AS count FROM ${table} WHERE created_at >= now() - interval '30 days'`),
    pool.query(`
      SELECT to_char(gs.day, 'YYYY-MM-DD') AS date, COALESCE(c.count, 0) AS count
      FROM generate_series(CURRENT_DATE - interval '29 days', CURRENT_DATE, interval '1 day') AS gs(day)
      LEFT JOIN (
        SELECT date_trunc('day', created_at) AS day, COUNT(*)::int AS count
        FROM ${table}
        WHERE created_at >= now() - interval '30 days'
        GROUP BY 1
      ) c ON c.day = gs.day
      ORDER BY gs.day
    `),
    pool.query(`
      SELECT COALESCE(NULLIF(${categoryColumn}, ''), 'Not specified') AS category, COUNT(*)::int AS count
      FROM ${table}
      GROUP BY 1
      ORDER BY count DESC
    `),
  ]);

  return {
    total: totalR.rows[0].count,
    last7: last7R.rows[0].count,
    last30: last30R.rows[0].count,
    daily: dailyR.rows,
    byCategory: byCategoryR.rows,
  };
}

module.exports = { listItems, updateStatus, deleteItem, getStats, ALLOWED_STATUSES };
