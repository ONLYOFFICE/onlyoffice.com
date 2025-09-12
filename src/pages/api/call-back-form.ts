import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { CallBackFormEmail } from "@src/components/emails/CallBackFormEmail";

interface IAddCallBackFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  language: string;
  desireddatetime: string;
  timezone: string;
  calltheme: string;
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
    phone,
    language,
    desireddatetime,
    timezone,
    calltheme,
    product,
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

    const addCallBackFormRequest = async () => {
      try {
        const addCallBackForm: IAddCallBackFormData = {
          first_name: fullName,
          last_name: "",
          email,
          phone,
          language,
          desireddatetime,
          timezone,
          calltheme,
        };

        await db.teamlabsite.query("INSERT INTO callback_request SET ?", [
          addCallBackForm,
        ]);

        return {
          status: "success",
          message: "callBackRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Add CallBackForm api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const addCallBackFormResult = await addCallBackFormRequest();
    if (addCallBackFormResult.status === "error") {
      errorMessages.push(
        `callBackFormRequest: ${addCallBackFormResult.message}`,
      );
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      to: [process.env.CALLBACK_EMAIL!],
      subject: `New callback request`,
      html: CallBackFormEmail({
        fullName,
        email,
        phone,
        language,
        desireddatetime,
        timezone,
        calltheme,
        product,
      }),
    });

    res.status(200).json({
      status: "success",
      message: "success",
    });
  } catch (error) {
    console.error("CallBackForm api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
