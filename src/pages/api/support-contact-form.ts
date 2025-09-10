import { NextApiRequest, NextApiResponse } from "next";
import { mkdirSync, writeFileSync, readdirSync, readFileSync } from "fs";
import path from "path";
import { File as FormidableFile, IncomingForm } from "formidable";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  const form = new IncomingForm({
    multiples: true,
    maxFiles: 10,
    maxFileSize: 5 * 1024 * 1024,
  });

  form.parse(req, async (err, fields, filesRaw) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res
        .status(400)
        .json({ status: "error", message: "Form parsing failed" });
    }

    const errorMessages: string[] = [];
    const cookies = parse(req.headers.cookie || "");

    const getField = (value: string | string[] | undefined): string =>
      Array.isArray(value) ? value[0] : value || "";

    const product = getField(fields.product);
    const subject = getField(fields.subject);
    const specifyOfOther = getField(fields.specifyOfOther);
    const paidLicense = getField(fields.paidLicense);
    const description = getField(fields.description);
    const name = getField(fields.name);
    const email = getField(fields.email);
    const languageCode = getField(fields.languageCode);
    const fromPage = getField(fields.from);
    const os = getField(fields.os);
    const hCaptchaResponse = getField(fields.hCaptchaResponse);

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

    // Normalize raw files into array
    const rawFiles = filesRaw.files;
    const uploadedFiles: FormidableFile[] = [];
    if (Array.isArray(rawFiles)) {
      uploadedFiles.push(...rawFiles);
    } else if (rawFiles) {
      uploadedFiles.push(rawFiles);
    }

    try {
      // Save form data to DB
      const formRecord: IAddSupportContactFormData = {
        first_name: name,
        last_name: name,
        phone: "",
        company_name: "",
        email,
        choice_language: languageCode,
        fromPage,
        operating_system: os,
        ip,
        utm_source: cookies.utmSource ?? null,
        utm_campaign: cookies.utmCampaign ?? null,
        utm_content: cookies.utmContent ?? null,
        utm_term: cookies.utmTerm ?? null,
      };
      await db.teamlabsite.query(
        "INSERT INTO form_registration_request SET ?",
        [formRecord],
      );
    } catch (dbErr) {
      console.error("DB insert error:", dbErr);
      errorMessages.push("supportContactForm DB error");
    }

    try {
      let attachments: { filename: string; path: string }[] = [];
      let requestDirName: string | null = null;

      if (uploadedFiles.length > 0) {
        // Prepare uploads directory
        const baseUploads = path.join(process.cwd(), "public", "uploads");
        mkdirSync(baseUploads, { recursive: true });

        // Determine next request-N folder
        const existing = readdirSync(baseUploads)
          .filter((name) => name.startsWith("request-"))
          .map((name) => parseInt(name.split("-")[1] || "0", 10))
          .filter((n) => !isNaN(n));
        const nextIdx = existing.length ? Math.max(...existing) + 1 : 1;
        requestDirName = `request-${nextIdx}`;
        const requestDir = path.join(baseUploads, requestDirName);
        mkdirSync(requestDir);

        // Save each uploaded file
        attachments = uploadedFiles.map((file) => {
          const fileData = readFileSync(file.filepath);
          const originalFilename = file.originalFilename ?? file.newFilename;
          const finalName = originalFilename.replace(/ /g, "_");
          const finalPath = path.join(requestDir, finalName);
          writeFileSync(finalPath, fileData);
          return { filename: finalName, path: finalPath };
        });
      }

      // Send email with attachments
      const transporter = emailTransporter();
      await transporter.sendMail({
        from: email,
        to: [process.env.SUPPORT_EMAIL!],
        subject: `${email} - SupportContactForm${errorMessages.length ? " [Error]" : ""}`,
        html: SupportContactFormEmail({
          firstName: name,
          email,
          supProduct: product,
          supTheme: subject,
          supOtherTheme: specifyOfOther,
          paidLicense,
          comment: description,
          languageCode,
          errorText: errorMessages.join(", "),
          attachmentFiles: attachments.map((a) => a.filename).join(", "),
        }),
        attachments,
      });

      return res
        .status(200)
        .json({ status: "success", folder: requestDirName });
    } catch (err) {
      console.error("Processing error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Processing failed" });
    }
  });
}
