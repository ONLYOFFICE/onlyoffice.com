import type { NextApiRequest, NextApiResponse } from "next";
import { resetPassword } from "@src/lib/requests/thirdparty/resetPassword";
import { validateEmail } from "@src/utils/validators";
import { sendEmail } from "@src/lib/requests/thirdparty/send";
import { PasswordReminder } from "@src/components/emails/PasswordReminder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email, emailSubject, language } = req.body;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

    if (!emailSubject) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'emailSubject' field",
      });
    }

    const restorePasswordData = await resetPassword({ email });

    if (restorePasswordData.status !== "success") {
      return res.status(504).json({
        status: "error",
        message: restorePasswordData.message || "Failed to reset password",
      });
    }

    const sendEmailData = await sendEmail({
      email,
      subject: emailSubject,
      body: PasswordReminder({ portals: restorePasswordData.data, language: language }),
    });

    if (sendEmailData.status !== "success") {
      return res.status(504).json({
        status: "error",
        message:
          sendEmailData.message || "Failed to send password reminder email",
      });
    }

    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error("restorepassword error:", err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
