const { getPool } = require('../lib/db');
const { sendEmail } = require('../lib/email');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { body = {}; }
  }

  const { name, phone, email, enquiringFor, message, website } = body || {};

  // Honeypot: real visitors never fill this hidden field.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone and email are required.' });
  }
  if (String(name).length > 200 || String(email).length > 200 || String(phone).length > 50) {
    return res.status(400).json({ error: 'One of the fields is too long.' });
  }

  try {
    const pool = getPool();
    await pool.query(
      'INSERT INTO enquiries (name, phone, email, enquiring_for, message) VALUES ($1, $2, $3, $4, $5)',
      [
        String(name).slice(0, 200),
        String(phone).slice(0, 50),
        String(email).slice(0, 200),
        enquiringFor ? String(enquiringFor).slice(0, 100) : null,
        message ? String(message).slice(0, 4000) : null,
      ]
    );

    try {
      await sendEmail({
        to: 'Initialcarehomes@outlook.com',
        subject: `New enquiry from ${String(name).slice(0, 200)}`,
        html: `<p><strong>Name:</strong> ${String(name).slice(0, 200)}</p>
             <p><strong>Phone:</strong> ${String(phone).slice(0, 50)}</p>
             <p><strong>Email:</strong> ${String(email).slice(0, 200)}</p>
             <p><strong>Enquiring for:</strong> ${enquiringFor ? String(enquiringFor).slice(0, 100) : 'Not provided'}</p>
             <p><strong>Message:</strong><br>${message ? String(message).slice(0, 4000).replace(/\n/g, '<br>') : 'None'}</p>`,
        text: `Name: ${String(name).slice(0, 200)}\nPhone: ${String(phone).slice(0, 50)}\nEmail: ${String(email).slice(0, 200)}\nEnquiring for: ${enquiringFor ? String(enquiringFor).slice(0, 100) : 'Not provided'}\nMessage: ${message ? String(message).slice(0, 4000) : 'None'}`,
      });
    } catch (emailErr) {
      // The enquiry is already saved in the database at this point, so a failed
      // notification email shouldn't be reported to the visitor as a failed submission.
      console.error('contact notification email failed', emailErr);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact send failed', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again or call us.' });
  }
};
