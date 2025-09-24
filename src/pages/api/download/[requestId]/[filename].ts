import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { pipeline, Readable } from "stream";
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

    const Body = s3Object.Body;
    if (!Body) {
        throw new Error("Unexpected S3 object body type: undefined");
    }

    if (typeof (Body as Readable).pipe === "function") {
        await streamPipeline(Body as Readable, res);
    }
    else if (Body instanceof Uint8Array) {
        res.end(Buffer.from(Body));
    }
    else {
        throw new Error("Unexpected S3 object body type");
    }
  } catch (err) {
    console.error("Download attachment error:", err);
    res.status(500).send("Internal Server Error");
  }
}
