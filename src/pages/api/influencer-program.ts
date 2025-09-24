import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
import { validateEmail } from "@src/utils/validators";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { InfluencerProgramEmail } from "@src/components/emails/InfluencerProgramEmail";

interface IData {
  full_name: string;
  email: string;
  link_to: string;
  more_details: string;
  create_on: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const { fromPage, fullName, email, link, moreDetails } = req.body;

  try {
    if (
      !fromPage ||
      typeof fromPage !== "string" ||
      !fullName ||
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      !validateEmail(email) ||
      !link ||
      typeof link !== "string" ||
      !moreDetails ||
      typeof moreDetails !== "string"
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid request parameters" });
    }

    const errorMessages: string[] = [];

    if (req.headers.referer) {
      try {
        const data: IData = {
          full_name: fullName,
          email,
          link_to: link,
          more_details: moreDetails,
          create_on: new Date(),
        };

        await db.teamlabsite.query(
          `INSERT INTO influencer_program_request SET ?`,
          [data],
        );
      } catch (error) {
        logError((req.url || "").split("?")[0], "DB", error);
        errorMessages.push(`DB: ${(error as Error).message}}`);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }

    try {
      const transporter = emailTransporter();
      await transporter.sendMail({
        to: process.env.SALES_EMAIL!,
        subject: `Influencer Program Request${fromPage ? ` [from: ${fromPage}]` : ""}`,
        html: InfluencerProgramEmail({
          fromPage,
          fullName,
          email,
          linkToInfluencer: link,
          moreDetails: moreDetails.replace(/\n/g, "<br/>"),
          errorText: errorMessages.join("<br/><br/>"),
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
