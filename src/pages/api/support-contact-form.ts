import { NextApiRequest, NextApiResponse } from "next";
import { promises as fsPromises, readFileSync } from "fs";
import path from "path";
import { File as FormidableFile, IncomingForm } from "formidable";
import { fileTypeFromBuffer } from "file-type";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";
import { db } from "@src/config/db/site";
import { parse } from "cookie";
import { emailTransporter } from "@src/config/email/transporter";
import { SupportContactFormEmail } from "@src/components/emails/SupportContactFormEmail";
import { TAllowedFileTypes } from "@src/components/templates/SupportContactForm/SupportContactForm.types";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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
  api: { bodyParser: false },
};

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 10;
const ALLOWED_FILE_TYPES: TAllowedFileTypes[] = ["image/jpeg", "image/png", "application/pdf"];
const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method Not Allowed" });
  }

  const form = new IncomingForm({
    multiples: true,
    maxFiles: MAX_FILES,
    maxFileSize: MAX_SIZE,
  });

  form.parse(req, async (err, fields, filesRaw) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(400).json({ status: "error", message: "Form parsing failed" });
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
        : req.headers["x-forwarded-for"])?.split(",")[0] ||
      req.socket.remoteAddress ||
      null;

    if (!isTestEmail(email)) {
      const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);
      if (!hCaptchaResult.success) {
        return res.status(400).json({ status: "errorHCaptchaInvalid", error: hCaptchaResult.error });
      }
    }

    // Normalize raw files into array
    const rawFiles = (filesRaw)?.files;
    const uploadedFiles: FormidableFile[] = [];
    if (Array.isArray(rawFiles)) uploadedFiles.push(...rawFiles);
    else if (rawFiles) uploadedFiles.push(rawFiles);

    // Save form data to DB
    try {
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
      await db.teamlabsite.query("INSERT INTO form_registration_request SET ?", [formRecord]);
    } catch (dbErr) {
      console.error("DB insert error:", dbErr);
      errorMessages.push("supportContactForm DB error");
    }

    // Handle files: upload to S3
    try {
      const attachments: { filename: string; path: string }[] = [];
      // Determine next request-N folder
      const requestId = `request-${Date.now()}`;
      const filenameCount: Record<string, number> = {};

      // Save each uploaded file
      for (const file of uploadedFiles) {
        const fileData = readFileSync(file.filepath);
        const detected = await fileTypeFromBuffer(fileData);

        // Check real MIME
        if (!detected || !ALLOWED_FILE_TYPES.includes(detected.mime as TAllowedFileTypes)) {
          console.error(`File "${file.originalFilename}" rejected. Declared: ${file.mimetype}, Found: ${detected?.mime}`);
          errorMessages.push(`File ${file.originalFilename} has invalid type`);
          await fsPromises.unlink(file.filepath);
          continue;
        }

        let originalFilename = file.originalFilename ?? file.newFilename ?? "file";
        originalFilename = originalFilename.replace(/ /g, "_");

        // Checking for duplicates within a query
        const baseName = path.parse(originalFilename).name;
        const ext = path.extname(originalFilename);
        if (!filenameCount[originalFilename]) filenameCount[originalFilename] = 0;
        else filenameCount[originalFilename] += 1;

        const finalName = filenameCount[originalFilename] === 0
          ? originalFilename
          : `${baseName}-${filenameCount[originalFilename]}${ext}`;

        const s3Key = `support-requests/${requestId}/${finalName}`;

        try {
          await s3Client.send(new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: s3Key,
            Body: fileData,
            ContentType: detected.mime,
          }));

          const s3Url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${s3Key}`;
          attachments.push({ filename: finalName, path: s3Url });

          // Delete the temporary file only after successful download
          await fsPromises.unlink(file.filepath);
        } catch (s3Err) {
          console.error(`Failed to upload file "${file.originalFilename}" to S3:`, s3Err);
          errorMessages.push(`Failed to upload ${file.originalFilename}`);
          // A temporary file remains for possible retry.
        }
      }

      const transporter = emailTransporter();
      await transporter.sendMail({
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
          // The links in the letter are clickable.
          attachmentFiles: attachments.map(a => `<a href="${a.path}">${a.filename}</a>`).join("<br>"),
        }),
        attachments: attachments.map(a => ({ filename: a.filename, href: a.path })),
      });

      return res.status(200).json({ status: "success", folder: requestId });
    } catch (err) {
      console.error("support-contact-form error:", err);
      return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  });
}
