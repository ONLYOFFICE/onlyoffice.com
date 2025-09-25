import { NextApiRequest, NextApiResponse } from "next";
import { checkRateLimit } from "@src/lib/helpers/checkRateLimit";
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
import {
  S3Client,
  PutObjectCommand,
  S3ServiceException,
} from "@aws-sdk/client-s3";

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

interface ISupportFormError {
  source?: string;
  error?: string | Error;
}

export const config = {
  api: { bodyParser: false },
};

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 10;
const ALLOWED_FILE_TYPES: TAllowedFileTypes[] = [
  "image/jpeg",
  "image/png",
  "application/pdf",
];
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
    return res
      .status(405)
      .json({ status: "error", message: "Method Not Allowed" });
  }

  if (!(await checkRateLimit(req, res))) return;

  const form = new IncomingForm({
    multiples: true,
    maxFiles: MAX_FILES,
    maxFileSize: MAX_SIZE,
  });

  form.parse(req, async (err, fields, filesRaw) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res
        .status(400)
        .json({ status: "error", message: "Form parsing failed" });
    }

    try {
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

      if (!isTestEmail(email)) {
        try {
          const hCaptchaResult = await validateHCaptcha(hCaptchaResponse, ip);
          if (!hCaptchaResult.success) {
            return res.status(400).json({
              status: "errorHCaptchaInvalid",
              error: hCaptchaResult.error,
            });
          }
        } catch (hErr) {
          throw { error: hErr, source: "hCaptcha validation" };
        }
      }

      // Normalize raw files into array
      const rawFiles = filesRaw?.files;
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
        await db.teamlabsite.query(
          "INSERT INTO form_registration_request SET ?",
          [formRecord],
        );
      } catch (dbErr) {
        console.error("DB insert error:", dbErr);
        errorMessages.push("supportContactForm DB error");
        throw { error: dbErr, source: "DB insert" };
      }

      // Handle files: upload to S3
      const attachments: { filename: string; path: string }[] = [];
      // Determine next request-N folder
      const requestId = `request-${Date.now()}`;
      const filenameCount: Record<string, number> = {};

      // Wrap loop in try/finally, to delete tmp-files
      try {
        // Save each uploaded file
        for (const file of uploadedFiles) {
          const fileData = readFileSync(file.filepath);
          const detected = await fileTypeFromBuffer(fileData);

          // Check real MIME
          if (
            !detected ||
            !ALLOWED_FILE_TYPES.includes(detected.mime as TAllowedFileTypes)
          ) {
            console.error(
              `File "${file.originalFilename}" rejected. Declared: ${file.mimetype}, Found: ${detected?.mime}`,
            );
            errorMessages.push(
              `File ${file.originalFilename} has invalid type`,
            );
            continue;
          }

          let originalFilename =
            file.originalFilename ?? file.newFilename ?? "file";
          originalFilename = originalFilename.replace(/ /g, "_");

          // Checking for duplicates within a query
          const baseName = path.parse(originalFilename).name;
          const ext = path.extname(originalFilename);
          if (!filenameCount[originalFilename])
            filenameCount[originalFilename] = 0;
          else filenameCount[originalFilename] += 1;

          const finalName =
            filenameCount[originalFilename] === 0
              ? originalFilename
              : `${baseName}-${filenameCount[originalFilename]}${ext}`;

          const s3Key = `support-requests/${requestId}/${finalName}`;

          try {
            await s3Client.send(
              new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                Key: s3Key,
                Body: fileData,
                ContentType: detected.mime,
              }),
            );

            // Generate a link to the download API route, not a direct link to S3
            const downloadUrl = `${process.env.BASE_URL}/api/download/${requestId}/${finalName}`;
            attachments.push({ filename: finalName, path: downloadUrl });
          } catch (s3Err) {
            console.error(
              `Failed to upload file "${file.originalFilename}" to S3:`,
              s3Err,
            );
            errorMessages.push(`Failed to upload ${file.originalFilename}`);
            // Remove TEMPORARY + s3Err after testing
            const e = s3Err as Partial<S3ServiceException> & {
              message?: string;
              name?: string;
              Code?: string;
            };
            return res.status(500).json({
              status: "error",
              message: "S3 upload failed ! TEMPORARY ! s3Err: " + s3Err,
              awsCode: e.Code ?? e.name ?? "UnknownError",
              awsMessage: e.message ?? "No message available",
              awsDetails: e.$metadata ?? null,
            });
          }
        }
      } finally {
        // Remove all tmp-files
        await Promise.all(
          uploadedFiles.map((f) =>
            fsPromises.unlink(f.filepath).catch(() => {}),
          ),
        );
      }

      try {
        const cookies = parse(req.headers.cookie || "");

        const transporter = emailTransporter();
        await transporter.sendMail({
          to: [process.env.SUPPORT_EMAIL!],
          subject: `${errorMessages.length ? " [Error]" : ""}${name} - Support Request ${cookies.utm_campaign ? `[utm: ${cookies.utm_campaign}]` : ""}[from: ${fromPage}]`,
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
            attachmentFiles: attachments
              .map((a) => `<a href="${a.path}">${a.filename}</a>`)
              .join(", "),
          }),
        });
      } catch (mailErr) {
        throw { error: mailErr, source: "sendMail" };
      }

      return res
        .status(200)
        .json({
          status: "success",
          folder: requestId,
          attachments: attachments,
        });
    } catch (err) {
      // Generic with source specified
      const typedErr = err as ISupportFormError;

      console.error("support-contact-form error:", err);
      return res.status(500).json({
        status: "error",
        message:
          "Internal Server Error. ! TEMPORARY ! err: " +
          JSON.stringify(err, Object.getOwnPropertyNames(err), 2), // Remove TEMPORARY + err after testing
        source: typedErr.source ?? "unknown",
        details: typedErr.error ?? err,
      });
    }
  });
}
