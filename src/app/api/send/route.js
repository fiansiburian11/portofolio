import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; 

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // Mengirim email ke email Anda, dengan email pengirim dari pengguna
    const data = await resend.emails.send({
      from: email, // Gunakan email pengguna yang mengisi form
      to: [fromEmail], // Kirim ke email Anda
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Menyusun respons yang berisi data pengiriman email
    return NextResponse.json(data);
  } catch (error) {
    // Menangani error jika pengiriman email gagal
    return NextResponse.json({ error: error.message });
  }
}
