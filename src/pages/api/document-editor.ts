import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const secret = process.env.ONLYOFFICE_DOCUMENT_SERVER_TOKEN;

interface DocumentConfig {
  fileType?: string;
  key?: string;
  title?: string;
  url?: string;
  permissions?: {
    edit?: boolean;
    fillForms?: boolean;
    comment?: boolean;
    download?: boolean;
    print?: boolean;
    review?: boolean;
  };
}

interface EditorConfig {
  mode?: "view" | "edit" | "fillForms" | "embedded" | "review";
  lang?: string;
  callbackUrl?: string;
  customization?: {
    uiTheme?: "theme-light" | "theme-classic-light" | "theme-dark" | "theme-contrast-dark" | "default-dark" | "default-light";
    anonymous?: {
      request: boolean;
      label?: string;
    };
    logo?: {
      image?: string;
      url?: string;
    };
    zoom?: number;
  };
}

interface TokenPayload {
  document?: DocumentConfig;
  documentType?: string;
  editorConfig?: EditorConfig;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    let payload: TokenPayload = req.body;

    if (!payload || Object.keys(payload).length === 0) {
      const documentKey = uuidv4();
      const fileType = req.query.fileType as string || "pdf";
      const title = req.query.title as string || "Example Document.pdf";
      const url = req.query.url as string || "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";
      const mode = req.query.mode as "view" | "edit" || "view";
      const uiTheme = (req.query.uiTheme as "theme-light" | "theme-classic-light" | "theme-dark" | "theme-contrast-dark" | "default-dark" | "default-light") || "theme-dark";

      payload = {
        document: {
          fileType,
          key: documentKey,
          title,
          url,
        },
        documentType: fileType,
        editorConfig: {
          mode,
          callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/onlyoffice-callback`,
          customization: {
            uiTheme,
            anonymous: {
              request: false,
            },
          },
        },
      };
    }

    const token = jwt.sign(payload, secret ?? "");
    res.status(200).json({
      token,
      config: payload
    });
  } catch (error) {
    console.error("Token generation error:", error);
    res.status(500).json({ error: "Token generation failed" });
  }
}
