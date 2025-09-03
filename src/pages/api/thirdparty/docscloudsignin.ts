import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@src/utils/validators";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: 405, error: "Method Not Allowed" });
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
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const text = await apiRes.text();
    let resData: unknown = null;
    try {
      resData = text ? JSON.parse(text) : null;
    } catch {
      resData = { error: "Invalid JSON response", raw: text };
    }

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ status: apiRes.status, error: resData || "Unexpected API error" });
    }

    if (resData?.error || resData?.message) {
      return res.status(apiRes.status).json({ status: apiRes.status, error: resData });
    }

    return res.status(200).json({ status: 200, ...resData });
  } catch (err: unknown) {
    console.error("Docs Cloud Signin error:", err);
    return res
      .status(500)
      .json({ status: 500, error: err?.message || "Internal Server Error" });
  }
}
