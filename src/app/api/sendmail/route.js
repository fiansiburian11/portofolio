import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.com",
      port: 465,
      secure: true,
      auth: {
        user: "node.m@yandex.com",
        pass: "fovkuyxqbutfzbqr",
      },
    });

    const mailOptions = {
      from: `"User Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${email}: ${subject}`,
      text: `Email from: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: "Email berhasil dikirim!" });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
