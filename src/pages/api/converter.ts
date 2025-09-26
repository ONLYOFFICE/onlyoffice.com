import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "@src/lib/helpers/logger";
import {
  S3Client,
  S3ClientConfig,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from "@aws-sdk/client-s3";
import formidable, { Files, Fields, File } from "formidable";
import fs from "fs";
import jwt from "jsonwebtoken";
import crypto, { randomUUID } from "crypto";
import { getClientIp } from "@src/lib/helpers/getClientIp";
import { isTestEmail } from "@src/utils/IsTestEmail";
import { validateHCaptcha } from "@src/utils/validateHCaptcha";

interface ICustomFields extends Fields {
  action?: string[];
  uuid?: string[];
  outputtype?: string[];
  formatType?: string[];
  converttoimage?: string[];
  region?: string[];
}

interface ICustomFiles extends Files {
  file?: File[];
}

interface IDocumentConversionServiceConfig {
  async?: boolean;
  filetype: string;
  key: string;
  outputtype: string;
  region?: string;
  title?: string;
  url: string;
  thumbnail?: {
    aspect?: number;
    first?: boolean;
    width?: number;
    height?: number;
  };
  spreadsheetLayout?: {
    ignorePrintArea?: boolean;
    fitToWidth?: number;
    fitToHeight?: number;
    headings?: boolean;
    gridLines?: boolean;
    margins?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  };
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const activeConversions = new Map<string, { cancelled: boolean }>();

const s3Config: S3ClientConfig = {
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
};

const s3 = new S3Client(s3Config);

function generateKey(expectedKey?: string): string {
  expectedKey = expectedKey || "";
  const maxLength = 128;

  if (expectedKey.length > maxLength) {
    const hash = crypto
      .createHash("sha256")
      .update(expectedKey, "utf8")
      .digest("base64");
    expectedKey = hash;
  }

  const key = expectedKey.replace(/[^0-9a-zA-Z_]/g, "_");

  return key.slice(-Math.min(key.length, maxLength));
}

const sendConvertRequest = async (payload: object) => {
  const token = jwt.sign(
    payload,
    process.env.ONLYOFFICE_DOCUMENT_SERVER_TOKEN!,
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL}/ConvertService.ashx`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        AuthorizationJwt: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const text = await res.text();

  return JSON.parse(text);
};

const deleteFromS3 = async (key: string): Promise<boolean> => {
  try {
    const deleteParams: DeleteObjectCommandInput = {
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: key,
    };

    await s3.send(new DeleteObjectCommand(deleteParams));
    return true;
  } catch (err) {
    const error = err as {
      name?: string;
      $metadata?: { httpStatusCode?: number };
    };

    if (
      error?.$metadata?.httpStatusCode === 404 ||
      error?.name === "NoSuchKey"
    ) {
      console.warn("S3 file not found:", key);
      return false;
    }

    console.error("Failed to delete from S3:", err);
    return false;
  }
};

const cleanup = async (filePath: string, fileName: string) => {
  await fs.promises.unlink(filePath);
  await deleteFromS3(fileName);
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

  if (
    !process.env.AWS_S3_REGION ||
    !process.env.AWS_S3_ACCESS_KEY ||
    !process.env.AWS_S3_SECRET_ACCESS_KEY ||
    !process.env.AWS_S3_BUCKET
  ) {
    return res
      .status(500)
      .json({ status: "error", message: "Missing AWS S3 configuration" });
  }

  const form = formidable({
    maxFileSize: 5 * 1024 * 1024,
  });

  form.parse(req, async (err, fields: ICustomFields, files: ICustomFiles) => {
    if (err) {
      if (err.message.includes("maxTotalFileSize")) {
        return res.status(400).json({
          status: "error",
          message:
            "The uploaded file likely exceeded the maximum file size 5 Mb",
        });
      }

      console.error("Form parsing error:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Form parsing failed" });
    }

    const action = fields.action?.[0];
    const uuid = fields.uuid?.[0] || "";
    const uploadedFile = files.file?.[0];

    if (action === "cancel" && uuid) {
      if (activeConversions.has(uuid)) {
        activeConversions.get(uuid)!.cancelled = true;
        return res
          .status(200)
          .json({ status: "success", message: "Conversion cancelled" });
      }

      return res
        .status(404)
        .json({ status: "error", message: "No active conversion found" });
    }

    if (activeConversions.has(uuid)) {
      activeConversions.get(uuid)!.cancelled = true;
    }

    activeConversions.set(uuid, { cancelled: false });

    if (!uploadedFile) {
      return res
        .status(400)
        .json({ status: "error", message: "No file uploaded" });
    }

    const fileName = `converter-upload/${randomUUID()}_${uploadedFile.originalFilename}`;
    const fileType =
      uploadedFile?.originalFilename?.split(".").pop()?.toLowerCase() || "";
    const filePath = uploadedFile.filepath;
    const outputtype = fields.outputtype?.[0];
    const formatType = fields.formatType?.[0];
    const region = fields.region?.[0];
    const isConvertToImage =
      fields.converttoimage?.[0] === "true" ? true : false;
    const email = fields.email?.[0];
    const hCaptchaResponse = fields.hCaptchaResponse?.[0] || "";

    try {
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
        const putObjectParams: PutObjectCommandInput = {
          Bucket: process.env.AWS_S3_BUCKET!,
          Key: fileName,
          Body: fs.createReadStream(filePath),
        };

        await s3.send(new PutObjectCommand(putObjectParams));
      } catch (err) {
        const error = err as { code?: string; message?: string };

        await cleanup(filePath, fileName);

        return res.status(500).json({
          status: "error",
          message:
            error?.code === "ENOTFOUND"
              ? "Invalid S3 region or endpoint"
              : error?.message || "Unknown error",
        });
      }

      let resultPercent = 0;
      let attempts = 0;
      const maxAttempts = 120;
      let fileUrl;
      let conversionError;

      while (resultPercent !== 100) {
        if (activeConversions.get(uuid)?.cancelled) {
          conversionError = "Conversion aborted due to new request";
          break;
        }

        if (attempts >= maxAttempts) {
          conversionError = "Too long waiting time for conversion to complete";
          break;
        }

        try {
          const payload: IDocumentConversionServiceConfig = {
            async: true,
            filetype: fileType,
            key: generateKey(filePath),
            outputtype: outputtype!,
            title: fileName,
            region: region,
            url: `https://${process.env.AWS_S3_BUCKET}/${fileName}`,
          };

          const response = await sendConvertRequest({ payload });

          if (response.error) {
            conversionError = response.error;
            const errorString = String(conversionError);
            if (errorString.startsWith("-")) {
              conversionError = `errorCode = ${errorString}`;
            }
            break;
          }

          resultPercent = response.percent || 0;

          if (resultPercent === 100) {
            fileUrl = response.fileUrl;
            break;
          }

          await new Promise((r) => setTimeout(r, 5000));
          attempts++;
        } catch (error) {
          console.error("Conversion check error:", error);
          conversionError = "Conversion check failed";
          break;
        }
      }

      const wasCancelled = activeConversions.get(uuid)?.cancelled;
      activeConversions.delete(uuid);

      if (conversionError || !fileUrl) {
        console.error("Conversion failed:", conversionError);
        cleanup(filePath, fileName);

        return res.status(400).json({
          status: wasCancelled ? "stopConvertRequestSuccessful" : "error",
          message: conversionError,
        });
      }

      let imageRequest = null;

      if (isConvertToImage === false) {
        const payload: IDocumentConversionServiceConfig = {
          async: false,
          filetype: fileType,
          key: generateKey(filePath),
          outputtype: "png",
          thumbnail: {
            aspect: 0,
            first: true,
            width: formatType === "presentation" ? 120 : 100,
            height: formatType === "presentation" ? 100 : 120,
          },
          title: fileName,
          url: `https://${process.env.AWS_S3_BUCKET}/${fileName}`,
          region: region,
          ...(formatType === "spreadsheet" && {
            spreadsheetLayout: {
              ignorePrintArea: true,
              fitToWidth: 1,
              fitToHeight: 0,
              headings: false,
              gridLines: false,
              margins: {
                top: "0mm",
                right: "0mm",
                bottom: "0mm",
                left: "0mm",
              },
            },
          }),
        };

        imageRequest = await sendConvertRequest({ payload });
      }

      cleanup(filePath, fileName);

      return res.status(200).json({
        status: "success",
        fileUrl: fileUrl,
        thumbnail: imageRequest?.fileUrl ?? "",
      });
    } catch (error) {
      logError((req.url || "").split("?")[0], "API", error);

      activeConversions.delete(uuid);
      cleanup(filePath, fileName);

      return res
        .status(500)
        .json({ status: "error", message: `errorCode = ${error}` });
    }
  });
}
