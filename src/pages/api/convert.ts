import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs/promises";

const url = process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL!;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "Form parsing error" });
    }

    const file = files.file?.[0];
    if (!file) {
      return res.status(400).json({ error: "File not uploaded" });
    }

    try {
      const fileBuffer = await fs.readFile(file.filepath);
      const blob = new Blob([fileBuffer]);

      function getFieldValue(value: string | string[] | undefined): string {
        if (typeof value === "undefined") return "";
        if (Array.isArray(value)) return value[0] ?? "";
        return value;
      }

      const formData = new FormData();
      formData.append("file", blob, file.originalFilename!);
      formData.append("toextension", getFieldValue(fields.toextension));
      formData.append("converttoimage", getFieldValue(fields.converttoimage));
      formData.append("type", getFieldValue(fields.type));
      formData.append(
        "recaptchaResponse",
        getFieldValue(fields.recaptchaResponse),
      );
      formData.append("email", getFieldValue(fields.email));
      formData.append("filetype", getFieldValue(fields.filetype));
      formData.append("uuid", getFieldValue(fields.uuid));
      formData.append("pagename", getFieldValue(fields.pagename));

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.log(error);

        const text = await response.text();
        console.error("Error parsing JSON. Response:", text);
        return res
          .status(500)
          .json({ error: "Error parsing JSON", details: text });
      }

      if (!response.ok) {
        console.error("External API error:", data);
        return res.status(response.status).json({ error: data });
      }

      return res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
}
