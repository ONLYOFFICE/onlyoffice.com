import type { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { resetPassword, sendEmail } from "@src/lib/requests/thirdparty";
import { validateEmail } from "@src/utils/validators";
import { PasswordReminderEmail } from "@src/components/emails/PasswordReminderEmail";
import { getT } from "@src/lib/helpers/i18next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  if (!(await checkRateLimit(req, res))) return;

  try {
    const { email, locale } = req.body;

    if (typeof email !== "string" || !validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request parameters",
      });
    }

    const t = await getT(locale, "PasswordReminderEmail");

    const restorePasswordData = await resetPassword({ email });

    if (restorePasswordData.status !== 200) {
      return res
        .status(restorePasswordData.status)
        .json({ status: "error", message: restorePasswordData.message });
    }

    const sendEmailData = await sendEmail({
      email,
      Subject: t("OOPasswordReminder"),
      Body: await PasswordReminderEmail({
        portals: restorePasswordData.data,
        language: locale,
      }),
    });

    if (sendEmailData.status !== 200) {
      return res
        .status(sendEmailData.status)
        .json({ status: "error", message: sendEmailData.message });
    }

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}
