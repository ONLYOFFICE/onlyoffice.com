import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const secret = process.env.ONLYOFFICE_DOCUMENT_SERVER_TOKEN;

type DocumentType =
  | "word"
  | "cell"
  | "slide"
  | "pdf"
  | "text"
  | "spreadsheet"
  | "presentation";

type UiTheme = "default-dark" | "default-light";

interface DocumentConfig {
  fileType?: string;
  key?: string;
  title?: string;
  url?: string;
  permissions?: {
    edit: boolean;
    fillForms: boolean;
    comment?: boolean;
    download?: boolean;
    print?: boolean;
    review: boolean;
  };
}

interface EditorConfig {
  mode: "view" | "edit";
  lang?: string;
  callbackUrl?: string;
  customization?: {
    uiTheme?: UiTheme;
    anonymous?: {
      request: boolean;
      label?: string;
    };
  };
}

interface TokenPayload {
  type?: "desktop" | "mobile" | "embedded";
  document?: DocumentConfig;
  documentType: DocumentType;
  editorConfig?: EditorConfig;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const bodyPayload = req.body as TokenPayload;

    let payload: TokenPayload;

    if (bodyPayload && Object.keys(bodyPayload).length > 0) {
      payload = bodyPayload;
    } else {
      const {
        type,
        fileType,
        title,
        url,
        documentType,
        mode,
        uiTheme = "default-dark",
      } = req.query as {
        type: "desktop" | "mobile" | "embedded";
        fileType: string;
        title: string;
        url: string;
        documentType: DocumentType;
        mode: EditorConfig["mode"];
        uiTheme?: UiTheme;
      };

      const edit = req.query.edit === "true";
      const fillForms = req.query.fillForms === "true";
      const review = req.query.review === "true";

      const permissions: DocumentConfig["permissions"] | undefined =
        edit || fillForms || review ? { edit, fillForms, review } : undefined;

      payload = {
        ...(type ? { type } : { type: "desktop" }),
        document: {
          fileType,
          key: uuidv4(),
          title,
          url,
          ...(permissions ? { permissions } : {}),
        },
        documentType,
        editorConfig: {
          mode,
          customization: {
            uiTheme,
            anonymous: {
              request: false,
            },
          },
        },
      };
    }

    if (!secret) {
      throw new Error("Missing ONLYOFFICE_DOCUMENT_SERVER_TOKEN in env");
    }

    const token = jwt.sign(payload, secret);
    res.status(200).json({ token, config: payload });
  } catch (error) {
    console.error("Token generation error:", error);
    res.status(500).json({ error: "Token generation failed" });
  }
}
