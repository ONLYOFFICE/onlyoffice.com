import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { validateEmail } from "@src/utils/validators";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { emailTransporter } from "@src/config/email/transporter";
import { DemoOrderEmail } from "@src/components/emails/DemoOrderEmail";

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
    website,
    companyName,
    date,
    time,
    timeZoneOffset,
    lang,
    module,
    note,
    spam,
    hCaptchaResponse,
  } = req.body;

  try {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      typeof website !== "string" ||
      typeof companyName !== "string" ||
      !date ||
      typeof date !== "string" ||
      !time ||
      typeof time !== "string" ||
      !timeZoneOffset ||
      typeof timeZoneOffset !== "string" ||
      !lang ||
      typeof lang !== "string" ||
      !module ||
      typeof module !== "string" ||
      typeof note !== "string" ||
      typeof spam !== "boolean" ||
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
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: [process.env.SUPPORT_EMAIL!],
        subject: "Demonstration Request",
        html: DemoOrderEmail({
          fullName,
          email,
          website,
          companyName,
          lang,
          date,
          time,
          timeZoneOffset,
          module,
          note: note.replace(/\n/g, "<br/>"),
        }),
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "Email transporter", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    if (spam) {
      const resSubscr = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/sendsubscription`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: "",
            email: email,
            type: "Common",
            locale: lang,
          }),
        },
      );
      const data = await resSubscr.json();

      if (data.status !== "success") {
        logError(
          (req.url || "").split("?")[0],
          "sendsubscription",
          data.message,
        );
        return res
          .status(400)
          .json({ status: data.status, message: data.message });
      }
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
