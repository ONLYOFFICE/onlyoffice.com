import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { logError } from "@src/lib/helpers/logger";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { InstallFeedbackEmail } from "@src/components/emails/InstallFeedbackEmail";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const {
    os,
    users_count,
    responsible,
    modules,
    issues,
    simple,
    meet,
    support,
    comments,
    email,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !os ||
      typeof os !== "string" ||
      !users_count ||
      typeof users_count !== "string" ||
      typeof responsible !== "string" ||
      !modules ||
      typeof modules !== "object" ||
      !issues ||
      typeof issues !== "string" ||
      !simple ||
      typeof simple !== "string" ||
      !meet ||
      typeof meet !== "string" ||
      !support ||
      typeof support !== "string" ||
      typeof comments !== "string" ||
      (!isTestEmail(email) &&
        (!hCaptchaResponse || typeof hCaptchaResponse !== "string"))
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const ip = getClientIp(req);

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "hCaptchaInvalid",
        });
      }
    }

    try {
      const modulesString = Object.keys(modules)
        .filter((key) => modules[key])
        .join(", ");

      const transporter = emailTransporter();
      await transporter.sendMail({
        to: process.env.SERVER_EMAIL!,
        subject: "Install Feedback",
        html: InstallFeedbackEmail({
          os,
          users_count,
          responsible,
          modules: modulesString,
          issues,
          simple,
          meet,
          support,
          comments: comments.replace(/\n/g, "<br/>"),
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    return res.status(200).json({ status: "success" });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
