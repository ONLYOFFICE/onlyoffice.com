import { NextApiRequest, NextApiResponse } from "next";
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
    const transporter = emailTransporter();
    await transporter.sendMail({
      to: [process.env.SUPPORT_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""} - Demonstration Request`,
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
        note,
      }),
    });

    if (spam) {
      const resSubscr = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/sendsubscription`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            language: lang,
            firstName: "",
            email: email,
            type: "Common",
          }),
        },
      );
      const data = await resSubscr.json();

      if (data.status !== "success") {
        console.error(
          "Demonstration Request sendsubscription returns errors:",
          data,
        );
        return res
          .status(400)
          .json({ status: data.status, message: data.message });
      }
    }

    res.status(200).json({
      status: "success",
      message: "success",
    });
  } catch (error) {
    console.error("Demonstration Request api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
