import ContactEmail from "@/email/template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ["dev.mvsc@gmail.com"],
      subject: "📩 Emaranhado Criativo - Nova mensagem",
      react: ContactEmail({ name, company, email, phone, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
