
module.exports = async function (context, req) {
  const body = req.body || {};
  const name = body.name || 'Guest';
  const phone = body.phone || '';
  const service = body.service || 'General';
  const date = body.date || '';
  const notes = body.notes || '';

  // Here you could add: send to email/Teams, or write to storage/DB.
  context.log('Booking request:', { name, phone, service, date, notes });

  return { status: 200, body: { ok: true, message: `Thanks, ${name}! We will call you at ${phone}.` } };
}
