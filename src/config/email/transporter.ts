import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type Mail from "nodemailer/lib/mailer";

export const emailTransporter = () => {
  const transporter = nodemailer.createTransport(
    {
      host: process.env.TRANSPORTER_EMAIL_HOST,
      port: process.env.TRANSPORTER_EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.TRANSPORTER_EMAIL_AUTH_USER,
        pass: process.env.TRANSPORTER_EMAIL_AUTH_PASSWORD,
      },
    } as SMTPTransport.Options,
    {
      from: `"Cloud Office Applications" <${process.env.TRANSPORTER_EMAIL_AUTH_USER}>`,
    } as Mail.Options,
  );

  return transporter;
};
