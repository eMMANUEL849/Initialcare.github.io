const { isAuthenticated } = require('../_lib/auth');
const { listItems, updateStatus, deleteItem } = require('../_lib/adminQueries');

const TABLE = 'enquiries';
const COLUMNS = ['id', 'name', 'phone', 'email', 'enquiring_for', 'message', 'status', 'created_at'];
const SEARCH_COLUMNS = ['name', 'email', 'phone', 'message'];

module.exports = async (req, res) => {
  if (!isAuthenticated(req)) return res.status(401).json({ error: 'Not authenticated' });

  if (req.method === 'GET') {
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 200);
    const offset = Math.max(parseInt(req.query.offset, 10) || 0, 0);
    const q = req.query.q ? String(req.query.q).slice(0, 200) : '';
    const status = req.query.status ? String(req.query.status).slice(0, 20) : '';
    const from = req.query.from ? String(req.query.from).slice(0, 40) : '';
    const to = req.query.to ? String(req.query.to).slice(0, 40) : '';

    try {
      const { rows, total } = await listItems(TABLE, COLUMNS, {
        limit, offset, q, searchColumns: SEARCH_COLUMNS, status, from, to,
      });
      return res.status(200).json({ messages: rows, total });
    } catch (err) {
      console.error('messages query failed', err);
      return res.status(500).json({ error: 'Failed to load messages.' });
    }
  }

  if (req.method === 'PATCH') {
    const id = parseInt(req.query.id, 10);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id.' });

    let body = req.body;
    if (!body || typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch { body = {}; }
    }
    const status = body && body.status;
    if (status !== 'new' && status !== 'contacted') {
      return res.status(400).json({ error: 'Invalid status.' });
    }

    try {
      await updateStatus(TABLE, id, status);
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error('messages update failed', err);
      return res.status(500).json({ error: 'Failed to update.' });
    }
  }

  if (req.method === 'DELETE') {
    const id = parseInt(req.query.id, 10);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id.' });

    try {
      await deleteItem(TABLE, id);
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error('messages delete failed', err);
      return res.status(500).json({ error: 'Failed to delete.' });
    }
  }

  res.setHeader('Allow', 'GET, PATCH, DELETE');
  return res.status(405).json({ error: 'Method not allowed' });
};
