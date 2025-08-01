import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
import { emailTransporter } from "@src/config/email/transporter";
import { WhitePapersEmail } from "@src/components/emails/WhitePapersEmail";

interface IAddWhitePapersData {
  fromPage: string;
  fullName: string;
  email: string;
  company: string;
  product: string;
  languageCode: string;
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
    return res.status(405).json({ message: "Method Not Allowed"})
  }

  const {
    fullName,
    email,
    company,
    product,
    languageCode,
    from,
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const addWhitePapersDataRequest = async () => {
      try {
        const addWhitePapersData: IAddWhitePapersData = {
          fullName,
          email,
          company,
          product,
          languageCode,
          fromPage: from,
          ip:
            req.headers["x-forwarded-for"] ||
            req.socket.remoteAddress ||
            null,
          utm_source: cookies.utmSource ?? null,
          utm_campaign: cookies.utmCampaign ?? null,
          utm_content: cookies.utmContent ?? null,
          utm_term: cookies.utmTerm ?? null,
        }

        await db.query("INSERT INTO whitepapers_request SET ?", [
          addWhitePapersData,
        ]);

        return {
          status: "success",
          message: "whitepapersRequestSuccessful",
        }
      } catch (error: unknown) {
        console.error(
          "Add WhitePapers api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message: error instanceof Error ? error.message : "Unknown error occurred",
        }
      }
    }

    const addWhitePapersDataResult = await addWhitePapersDataRequest();
    if (addWhitePapersDataResult.status === "error") {
      errorMessages.push(
        `whitepapersRequest: ${addWhitePapersDataResult.message}`,
      )
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.SALES_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${company} - WhitePapers Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: WhitePapersEmail({
        fromPage: from,
        fullName,
        email,
        company,
        product,
        languageCode,
      })
    })

    res.status(200).json({
      status: "success",
      message: "success",
    })
  } catch (error) {
    console.error("WhitePapers api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error
    });
  }
}