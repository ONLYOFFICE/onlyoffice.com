import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const secret = process.env.ONLYOFFICE_DOCUMENT_SERVER_TOKEN!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const token = jwt.sign(req.body, secret);
    res.status(200).json({ token });
  } catch {
    res.status(500).json({ error: "Token generation failed" });
  }
}
