import { NextResponse } from "next/server";
import { resend } from "@/config/resend"; // Update with actual import

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: "Fill Up All Fields.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "CrystalWipe <onboarding@resend.dev>",
      to: ["crystalwipecs@gmail.com"],
      subject: "CrystalWipe Contact Form",
      html: `<h1>Name: ${name}<br>Email: ${email}<br>Message: ${message}</h1>`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
