import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { validateEmail } from "@src/utils/validators";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { TrainingCoursesEmail } from "@src/components/emails/TrainingCoursesEmail";

interface IAddTrainigCoursesData {
  full_name: string;
  email: string;
  company_name: string;
  langSelect: string;
  timezone: string;
  course: string;
  message: string;
  langCode: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const {
    fullName,
    email,
    company,
    lang,
    timezone,
    course,
    message,
    languageCode,
    from,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !company ||
      typeof company !== "string" ||
      !lang ||
      typeof lang !== "string" ||
      !timezone ||
      typeof timezone !== "string" ||
      !course ||
      typeof course !== "string" ||
      typeof message !== "string" ||
      !languageCode ||
      typeof languageCode !== "string" ||
      typeof from !== "string" ||
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
      const addTrainingCourses: IAddTrainigCoursesData = {
        full_name: fullName,
        email,
        company_name: company,
        langSelect: lang,
        timezone,
        course,
        message,
        langCode: languageCode,
      };

      await db.teamlabsite.query("INSERT INTO training_courses_request SET ?", [
        addTrainingCourses,
      ]);
    } catch (error) {
      logError((req.url || "").split("?")[0], "DB", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SALES_EMAIL!],
        subject: `Request${from ? ` [from: ${from}]` : ""}`,
        html: TrainingCoursesEmail({
          fromPage: from,
          fullName,
          email,
          company,
          lang,
          timezone,
          course,
          message: message.replace(/\n/g, "<br/>"),
          languageCode,
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
    }

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    logError((req.url || "").split("?")[0], "API", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
