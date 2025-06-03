import type { NextApiRequest, NextApiResponse } from "next";

const STRAPI_API_URL = process.env.STRAPI_API_URL || "http://localhost:3000";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { locale, key, country, maxLimit } = req.query;
    const searchParams = new URLSearchParams();

    if (locale) {
      searchParams.append('locale', locale as string);
    }

    if (key) {
      searchParams.append('filters[name][$startsWithi]', key as string);
    }

    if (country) {
      searchParams.append('filters[country][$eq]', country as string);
    }

    if (maxLimit) {
      searchParams.append('pagination[limit]', maxLimit as string);
    }

    const strapiResponse = await fetch(`${STRAPI_API_URL}/api/partners/?${searchParams.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )

    if (!strapiResponse.ok) {
      const text = await strapiResponse.text();
      return res.status(strapiResponse.status).json({
        error: `Strapi error in "find-partners.ts"- ${strapiResponse.status}: ${text}`,
      });
    }

    const data = await strapiResponse.json();
    return res.status(200).json(data);
  } catch(error) {
    console.error("Error in API /api/find-partners:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
