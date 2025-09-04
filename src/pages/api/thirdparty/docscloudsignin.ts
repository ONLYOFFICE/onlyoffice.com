import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@src/utils/validators";
import { DocsCloudSigninResponse, DocsCloudSigninError } from "@src/types/docscloudsignin";

interface SigninData {
  email: string;
  captcha: { type: "hcaptcha"; token: string };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocsCloudSigninResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: 405, error: "Method Not Allowed" });
  }

  try {
    const { data, recaptchaLang } = req.body as { data: SigninData; recaptchaLang?: string };

    if (typeof data.email !== "string" || !validateEmail(data.email)) {
      return res.status(400).json({
        status: 400,
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
    let resData: DocsCloudSigninResponse | null = null;
    try {
      resData = text ? JSON.parse(text) : null;
    } catch {
      resData = { status: apiRes.status, error: "Invalid JSON response", raw: text };
    }

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ status: apiRes.status, error: resData || "Unexpected API error" });
    }

    if ("error" in (resData || {}) || "message" in (resData || {})) {
      return res.status(apiRes.status).json({
        status: apiRes.status,
        error: (resData as DocsCloudSigninError).error ?? "Unknown error",
        message: (resData as DocsCloudSigninError).message,
        raw: (resData as DocsCloudSigninError).raw,
      });
    }

    return res.status(200).json({ ...resData, status: 200 });
  } catch (err: unknown) {
    console.error("Docs Cloud Signin error:", err);
    return res
      .status(500)
      .json({ status: 500, error: err instanceof Error ? err.message : "Internal Server Error" });
  }
}
