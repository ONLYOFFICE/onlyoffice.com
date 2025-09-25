import { NextApiRequest, NextApiResponse } from "next";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
import { emailTransporter } from "@src/config/email/transporter";
import { PrivateRoomsEmail } from "@src/components/emails/PrivateRoomsEmail";

interface IAddPrivateRoomsData {
  fromPage: string;
  fullName: string;
  email: string;
  company: string;
  ip: string | string[] | null;
  utm_source: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, company, email, from, hCaptchaResponse } = req.body;

  try {
    const ip =
      (Array.isArray(req.headers["x-forwarded-for"])
        ? req.headers["x-forwarded-for"][0]
        : req.headers["x-forwarded-for"]
      )?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);

      if (!hCaptchaResult.success) {
        return res.status(400).json({
          status: "errorHCaptchaInvalid",
          error: hCaptchaResult.error,
        });
      }
    }

    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const addPrivateRoomsDataRequest = async () => {
      try {
        const addPrivateRoomsData: IAddPrivateRoomsData = {
          fullName,
          company,
          email,
          fromPage: from,
          ip,
          utm_source: cookies.utmSource ?? null,
          utm_campaign: cookies.utmCampaign ?? null,
          utm_content: cookies.utmContent ?? null,
          utm_term: cookies.utmTerm ?? null,
        };

        await db.teamlabsite.query("INSERT INTO private_rooms_request SET ?", [
          addPrivateRoomsData,
        ]);

        return {
          status: "success",
          message: "privateRoomsRequestSuccessful",
        };
      } catch (error: unknown) {
        console.error(
          "Add PrivateRooms api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    };

    const addPrivateRoomsDataResult = await addPrivateRoomsDataRequest();
    if (addPrivateRoomsDataResult.status === "error") {
      errorMessages.push(
        `privateRoomsRequest: ${addPrivateRoomsDataResult.message}`,
      );
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${company} - PrivateRooms Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: PrivateRoomsEmail({
        fromPage: from,
        fullName,
        company,
        email,
      }),
    });

    res.status(200).json({
      status: "success",
      message: "success",
    });
  } catch (error) {
    console.error("PrivateRooms api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
}
