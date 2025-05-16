import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IActionsContentProps, ITokenResponse } from "./ActionsContent.types";

import { StyledActionsContent } from "./ActionsContent.styled";

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

const ActionsContent = ({
  url,
  title,
  fileType,
  mode,
  uiTheme,
}: IActionsContentProps) => {
  const [token, setToken] = useState("");
  const [config, setConfig] = useState<ITokenResponse["config"] | null>(null);

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
  );
};

export { ActionsContent };
