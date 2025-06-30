import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { from, to, subject, html } = req.body;

  if (!from || !to || !subject || !html) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.TRANSPORTER_EMAIL_HOST,
      port: process.env.TRANSPORTER_EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.TRANSPORTER_EMAIL_AUTH_USER,
        pass: process.env.TRANSPORTER_EMAIL_AUTH_PASSWORD,
      },
    } as SMTPTransport.Options);

    await transporter.sendMail({
      from,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html,
    });

    res.status(200).json({ status: "success", message: "EmailSentSuccessful" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "error", message: "Error sending email" });
  }
}
