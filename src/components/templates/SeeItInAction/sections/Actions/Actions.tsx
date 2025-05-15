import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Container } from "@src/components/ui/Container";
import { ITokenResponse } from "./Actions.types";

import { StyledActionsContent } from "./Actions.styled";

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

const Actions = () => {
  const [token, setToken] = useState("");
  const [config, setConfig] = useState<ITokenResponse["config"] | null>(null);

  const mode = "edit";
  const title = "Example Document Title.pdf";
  const uiTheme = "theme-dark";
  const fileType = "pdf";
  const url = "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";
  // const title = "Example Document Title.docx";
  // const fileType = "docx";
  // const url = "https://static.onlyoffice.com/assets/docs/samples/oform.docx";

  useEffect(() => {
    const apiUrl = `/api/document-editor?fileType=${fileType}&title=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(url)}&mode=${mode}&uiTheme=${uiTheme}`;

    const fetchApi = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        const data: ITokenResponse = await res.json();
        setToken(data.token);
        setConfig(data.config);
      } catch (err) {
        console.error(err);
      }
    };

    fetchApi();
  }, [fileType, title, url, mode, uiTheme]);

  const onLoadComponentError = (
    errorCode: number,
    errorDescription: string,
  ) => {
    console.error(errorCode, errorDescription);
  };

  return (
    <Container>
      <StyledActionsContent>
        {token && config && (
          <DocumentEditor
            id="docxEditor"
            documentServerUrl={
              process.env.ONLYOFFICE_DOCUMENT_SERVER_URL ||
              "https://asc.docs.teamlab.info"
            }
            config={{
              documentType: config.documentType,
              token: token,
              document: config.document,
              editorConfig: config.editorConfig,
            }}
            onLoadComponentError={onLoadComponentError}
          />
        )}
      </StyledActionsContent>
    </Container>
  );
};

export { Actions };
