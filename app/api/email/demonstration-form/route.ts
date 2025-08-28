import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { DemoBookingCustomerTemplate } from "@/components/ui/email/DemoBookingCustomerTemplate";
import DemoBookingSalesTemplate from "@/components/ui/email/DemoBookingSalesTemplate";
export async function POST(req: NextRequest) {
  try {
    const result = await req.json();
    const transporter = nodemailer.createTransport({
      host: `${process.env.NEXT_PUBLIC_SMTP_HOST}`,
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
        pass: `${process.env.NEXT_PUBLIC_SMTP_PASS}`,
      },
    });

    const body = result;
    const customerDemoEmailHtml = await render(
      DemoBookingCustomerTemplate({
        name: body.dataOne.name,
        date: body.dataTwo.date,
        time: body.dataTwo.time,
      })
    );
    const salesDemoEmailHtml = await render(
      DemoBookingSalesTemplate({
        name: body.dataOne.name,
        date: body.dataTwo.date,
        time: body.dataTwo.time,
        email: body.dataOne.email,
        url: body.dataOne.url,
        referral: body.dataOne.referral,
      })
    );

    const customerMail = {
      from: process.env.NEXT_PUBLIC_SMTP_FROM,
      to: result.dataOne.email,
      subject: "Welcome to Orio",
      html: customerDemoEmailHtml,
    };

    const salesMail = {
      from: process.env.NEXT_PUBLIC_SMTP_FROM,
      to: "sales@getorio.com",
      cc: "syedayanali@getorio.com, muhammadikhlas@getorio.com, elsarahim@getorio.com, ibadamir@getorio.com, saymkhan@getorio.com",
      subject: `New Client Registration on Orio`,
      html: salesDemoEmailHtml,
    };
    await transporter.sendMail(customerMail);
    await transporter.sendMail(salesMail);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log("Error handling request", error);
    return NextResponse.json({ message: "error" });
  }
}
