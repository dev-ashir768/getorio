import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { CustomerContactTemplate } from "@/components/ui/email/CustomerContactTemplate";
import SalesContactTemplate from "@/components/ui/email/SalesContactTemplate";

export async function POST(req: NextRequest) {
  try {
    const response = await req.json();

    const transporter = nodemailer.createTransport({
      host: `${process.env.NEXT_PUBLIC_SMTP_HOST}`,
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
        pass: `${process.env.NEXT_PUBLIC_SMTP_PASS}`,
      },
    });

    const body = response;
    const customerContactEmailHtml = await render(
      CustomerContactTemplate({ userName: body.name })
    );

    const salesContactEmailHtml = await render(
      SalesContactTemplate({
        name: body.name,
        subject: body.subject,
        message: body.message,
        email: body.email,
      })
    );

    const customer_mail = {
      from: process.env.NEXT_PUBLIC_SMTP_FROM,
      to: response.email,
      subject: "Thanks for Contact Orio",
      html: customerContactEmailHtml,
    };

    const sales_mail = {
      from: process.env.NEXT_PUBLIC_SMTP_FROM,
      to: "sales@getorio.com",
      cc: "syedayanali@getorio.com, muhammadikhlas@getorio.com, elsarahim@getorio.com, ibadamir@getorio.com, saymkhan@getorio.com",
      subject: `New From Submitted by ${response.name}`,
      html: salesContactEmailHtml,
    };

    await transporter.sendMail(customer_mail);
    await transporter.sendMail(sales_mail);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log("Error handling request", error);
    return NextResponse.json({ message: "error" });
  }
}
