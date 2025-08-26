import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const emailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_EMAIL_HOST,
    port: process.env.TRANSPORTER_EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.TRANSPORTER_EMAIL_AUTH_USER,
      pass: process.env.TRANSPORTER_EMAIL_AUTH_PASSWORD,
    },
  } as SMTPTransport.Options);

  return transporter;
};
