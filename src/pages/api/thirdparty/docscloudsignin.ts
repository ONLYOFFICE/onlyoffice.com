import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@src/utils/validators";
import { createAuthToken } from "@src/utils/createAuthToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { data, recaptchaLang } = req.body;

    if (typeof data.email !== "string" || !validateEmail(data.email)) {
      return res.status(400).json({
        status: "error",
        message: "Missing or invalid 'email' field",
      });
    }

    const url =
      (process.env.DOCS_CLOUD_SIGNIN_API || "") +
      `?culture=${encodeURIComponent(recaptchaLang || "en")}`;

    const apiRes = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: createAuthToken("site", process.env.CORE_MACHINEKEY!),
      },
      body: JSON.stringify(data),
    });

    const text = await apiRes.text();
    let data: any = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { error: "Invalid JSON response", raw: text };
    }

    if (!apiRes.ok || data?.error || data?.message) {
      console.error("Docs Cloud Signin API error:", data);
      return res.status(apiRes.status).json(
        data || {
          status: "error",
          message: "Unexpected API error",
        },
      );
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("Docs Cloud Signin error:", err);
    return res
      .status(500)
      .json({ error: err?.message || "Internal Server Error" });
  }
}
