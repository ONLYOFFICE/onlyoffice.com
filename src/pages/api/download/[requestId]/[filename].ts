import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { pipeline } from "stream";
import { promisify } from "util";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
});

const streamPipeline = promisify(pipeline);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { requestId, filename } = req.query;

  if (!requestId || !filename || Array.isArray(requestId) || Array.isArray(filename)) {
    return res.status(400).send("Invalid parameters");
  }

  const key = `support-requests/${requestId}/${filename}`;

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: key,
    });

    const s3Object = await s3Client.send(command);

    if (!s3Object.Body) {
      return res.status(404).send("File not found");
    }

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", s3Object.ContentType || "application/octet-stream");

    await streamPipeline(s3Object.Body as any, res);
  } catch (err) {
    console.error("Download attachment error:", err);
    res.status(500).send("Internal Server Error");
  }
}
