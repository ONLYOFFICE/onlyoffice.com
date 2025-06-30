import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { token } = req.body;

    const params = new URLSearchParams();
    params.append("response", token);
    params.append("secret", process.env.HCAPTCHA_SECRET_KEY!);

    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({
        status: "success",
        message: "hCaptchaValidateRequestSuccessful",
      });
    } else {
      console.error("hCaptcha api returns errors:", data);
      res
        .status(400)
        .json({ status: "errorHCaptchaInvalid", error: data["error-codes"] });
    }
  } catch (error) {
    console.error("hCaptcha validation exception:", error);
    return res.status(500).json({ status: "error", message: error });
  }
}
