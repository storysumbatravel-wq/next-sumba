import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import nodemailer from "nodemailer";

// Konfigurasi Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true untuk port 465, false untuk port lainnya
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
        { status: 400 },
      );
    }

    // 1. Simpan pesan ke Database MySQL
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
      },
    });

    // 2. Kirim Email Notifikasi ke Admin (storysumbatravel@gmail.com)
    try {
      const mailOptions = {
        from: `"StorySumba Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // storysumbatravel@gmail.com
        replyTo: email, // Jika admin reply, akan langsung ke email customer
        subject: `[StorySumba] New Message: ${subject}`,
        html: `
          <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background: #1B2A4A; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; font-family: 'Playfair Display', serif; margin: 0; font-size: 24px;">StorySumba</h1>
              <p style="color: #D4A853; margin: 5px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">New Contact Message</p>
            </div>
            
            <div style="padding: 30px; background: #ffffff;">
              <h2 style="font-family: 'Playfair Display', serif; color: #1B2A4A; margin-top: 0;">${subject}</h2>
              
              <div style="background: #FAF6F0; border-left: 4px solid #C4532E; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
              </div>

              <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                <h3 style="font-family: 'Playfair Display', serif; color: #1B2A4A; margin-bottom: 10px; font-size: 16px;">Sender Details:</h3>
                <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #C4532E;">${email}</a></p>
                ${phone ? `<p style="margin: 5px 0; color: #374151;"><strong>Phone:</strong> ${phone}</p>` : ""}
              </div>
            </div>

            <div style="background: #FAF6F0; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
              This message was sent from the StorySumba website contact form.
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(
        "Email notification sent successfully to",
        process.env.EMAIL_TO,
      );
    } catch (emailError) {
      // Jika gagal kirim email, tetap return sukses karena data sudah tersimpan di DB
      // Cukup log errornya saja
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json(
      { message: "Contact message sent successfully", data: contact },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

// GET /api/contact — Mendapatkan semua pesan (opsional untuk admin)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}
