import type { NextApiRequest, NextApiResponse } from "next";
import { isTestEmail } from "@src/utils/IsTestEmail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const result = isTestEmail(email);
    return res.status(200).json({ isTestEmail: result });
  } catch (error) {
    console.error("validate-test-email error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
