import { InstallFeedbackEmail } from "@src/components/emails/InstallFeedbackEmail";
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
    from,
    hCaptchaResponse,
  } = req.body;

  try {
    const ip =
      (Array.isArray(req.headers["x-forwarded-for"])
        ? req.headers["x-forwarded-for"][0]
        : req.headers["x-forwarded-for"]
      )?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;

    const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

    if (!hCaptchaResult.success) {
      return res.status(400).json({
        status: "errorHCaptchaInvalid",
        error: hCaptchaResult.error,
      });
    }

    const modulesString = Object.keys(modules)
      .filter((key) => modules[key])
      .join(", ");

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
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
        comments,
      }),
    });
  } catch (error) {
    console.error("InstallFeedback api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }

  res.status(200).json({
    status: "success",
    message: "success",
  });
}
