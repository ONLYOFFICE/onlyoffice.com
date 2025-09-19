import type { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { resetPassword } from "@src/lib/requests/thirdparty/resetPassword";
import { validateEmail } from "@src/utils/validators";
import { sendEmail } from "@src/lib/requests/thirdparty/send";
import { PasswordReminder } from "@src/components/emails/PasswordReminder";
import { getLanguage } from "@src/lib/helpers/getLanguage";
import { getServerI18n } from "@src/lib/helpers/getServerI18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!(await checkRateLimit(req, res))) return;

  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { email } = req.body;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request parameters",
      });
    }

    const language = getLanguage(req);
    const i18n = await getServerI18n(language, ["docspace-registration"]);
    const restorePasswordData = await resetPassword({ email });

    if (restorePasswordData.status !== "success") {
      return res.status(504).json({
        status: "error",
        message: restorePasswordData.message || "Failed to reset password",
      });
    }

    const sendEmailData = await sendEmail({
      email,
      subject: i18n.t("OOPasswordReminder"),
      body: await PasswordReminder({
        portals: restorePasswordData.data,
        language: language,
      }),
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
