import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { emailTransporter } from "@src/config/email/transporter";
import { InfluencerProgram } from "@src/components/emails/InfluencerProgram";

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

  const { fromPage, fullName, email, link, moreDetails, errorText } = req.body;

  try {
    const data: IData = {
      full_name: fullName,
      email,
      link_to: link,
      more_details: moreDetails,
      create_on: new Date(),
    };

    await db.teamlabsite.query(`INSERT INTO influencer_program_request SET ?`, [
      data,
    ]);

    const transporter = emailTransporter();

    await transporter.sendMail({
      from: `"Cloud Office Applications" <${process.env.TRANSPORTER_EMAIL_AUTH_USER}>`,
      to: process.env.SALES_EMAIL!,
      subject: `Request ${fromPage}`,
      html: InfluencerProgram({
        fromPage,
        fullName,
        email,
        linkToInfluencer: link,
        moreDetails,
        errorText,
      }),
    });

    return res.status(200).json({
      status: "success",
      message: "InfluencerProgramRequestSuccessful",
    });
  } catch (error) {
    console.error("Influencer program request error:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}
