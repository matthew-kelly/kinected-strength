import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const { name, email, reason, message } = req.body;

  try {
    // Initializing the SMTP connection
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    // Define email content
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New email from ${name}`,
      html: `
      <div>
        <p>Name: ${name}</p><br />
        <p>Email: ${email}</p><br />
        ${reason && `<p>Reason: ${reason}</p><br />`}
        <p>Message: ${message}</p>
      </div>`,
    };
    // Function to send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
