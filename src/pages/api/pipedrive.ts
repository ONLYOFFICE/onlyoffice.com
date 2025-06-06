import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const body = req.body;
    const url = `${process.env.PIPEDRIVE_API_URL}${process.env.PIPEDRIVE_API_TOKEN}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PIPEDRIVE_API_TOKEN}`,
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({
        status: "success",
        message: "postApiPipedriveRequestSuccessful",
      });
    } else {
      console.error("Pipedrive api returns errors:", data);
      return res.status(400).json({
        status: "error",
        message: data.error,
      });
    }
  } catch (error) {
    console.error("Error in Pipedrive API handler:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
}
