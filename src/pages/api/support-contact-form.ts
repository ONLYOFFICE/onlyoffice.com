import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
import { emailTransporter } from "@src/config/email/transporter";
import { SupportContactFormEmail } from "@src/components/emails/SupportContactFormEmail";

interface IAddSupportContactFormData {
  fromPage: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  company_name: string;
  choice_language: string;
  operating_system: string;
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
    product,
    subject,
    specifyOfOther,
    paidLicense,
    description,
    files,
    name,
    email,
    languageCode,
    from,
    os,
  } = req.body;

  try {
    const errorMessages = [];
    const cookies = parse(req.headers.cookie || "");

    const addSupportContactFormRequest = async () => {
      try {
        const addSupportContactForm: IAddSupportContactFormData = {
          first_name: name,
          last_name: name,
          phone: "",
          company_name: "",
          email,
          choice_language: languageCode,
          fromPage: from,
          operating_system: os,
          ip:
            req.headers["x-forwarded-for"] ||
            req.socket.remoteAddress ||
            null,
          utm_source: cookies.utmSource ?? null,
          utm_campaign: cookies.utmCampaign ?? null,
          utm_content: cookies.utmContent ?? null,
          utm_term: cookies.utmTerm ?? null,
        }

        await db.query("INSERT INTO form_registration_request SET ?", [
          addSupportContactForm,
        ]);

        return {
          status: "success",
          message: "supportContactFormSuccessful",
        }
      } catch (error: unknown) {
        console.error(
          "Add SupportContactForm api returns errors:",
          error instanceof Error ? error.message : error,
        );

        return {
          status: "error",
          message: error instanceof Error ? error.message : "Unknown error occurred",
        }
      }
    }

    const addSupportContactFormResult = await addSupportContactFormRequest();
    if (addSupportContactFormResult.status === "error") {
      errorMessages.push(
        `supportContactForm: ${addSupportContactFormResult.message}`,
      )
    }

    const transporter = emailTransporter();
    await transporter.sendMail({
      from,
      to: [process.env.SUPPORT_EMAIL!],
      subject: `${errorMessages.length ? "[Error] " : ""}${email} - SupportContactForm Request ${`${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}`}[from: ${from}]`,
      html: SupportContactFormEmail({
        firstName: name,
        email,
        supProduct: product,
        supTheme: subject,
        supOtherTheme: specifyOfOther,
        paidLicense,
        comment: description,
        languageCode,
        errorText: errorMessages.length ? `[Error]: ${errorMessages.join(", ")}` : "",
        attachmentFiles: files,
      })
    })

    res.status(200).json({
      status: "success",
      message: "success",
    })
  } catch (error) {
    console.error("SupportContactForm api returns errors:", error);
    res.status(500).json({
      status: "error",
      message: error
    });
  }
}