import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    const email = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SENDGRID_EMAIL,
      subject: `New email from ${req.body.name}`,
      html: `
      <div>
        <p>Name: ${req.body.name}</p><br />
        <p>Email: ${req.body.email}</p><br />
        ${req.body?.reason && `<p>Reason: ${req.body.reason}</p><br />`}
        <p>Message: ${req.body.message}</p>
      </div>`,
    };
    await sendgrid.send(email);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
