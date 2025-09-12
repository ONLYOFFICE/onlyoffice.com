import { NextApiRequest, NextApiResponse } from "next";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
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

    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const addTrainingCoursesRequest = async () => {
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

        await db.teamlabsite.query(
          "INSERT INTO training_courses_request SET ?",
          [addTrainingCourses],
        );

        return {
          status: "success",
          message: "trainingCoursesRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Add TrainingCourses api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const addTrainingCoursesResult = await addTrainingCoursesRequest();
    if (addTrainingCoursesResult.status === "error") {
      errorMessages.push(
        `trainingCoursesRequest: ${addTrainingCoursesResult.message}`,
      );
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${company} - TrainingCourses Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: TrainingCoursesEmail({
        fromPage: from,
        fullName,
        email,
        company,
        lang,
        timezone,
        course,
        message,
        languageCode,
      }),
    });

    res.status(200).json({
      status: "success",
      message: "success",
    });
  } catch (error) {
    console.error("TrainingCourses api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
