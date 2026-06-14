import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL!;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Wypełnij wszystkie pola." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Morv <morv@morv.dev>",
      to: TO,
      replyTo: email,
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Błąd wysyłki. Spróbuj ponownie." }, { status: 500 });
  }
}
