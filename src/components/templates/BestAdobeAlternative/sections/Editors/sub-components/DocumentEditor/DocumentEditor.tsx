import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TokenResponse } from "./DocumentEditor.types";

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

const OnlyOfficeEditor = ({
  title,
  edit,
  fillForms,
}: {
  title: string;
  edit: string;
  fillForms: string;
}) => {
  const [token, setToken] = useState("");
  const [config, setConfig] = useState<TokenResponse["config"] | null>(null);

  const fileType = "pdf";
  const url = "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";
  const uiTheme = "theme-dark";

  useEffect(() => {
    const apiUrl = `/api/document-editor?fileType=${fileType}&title=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(url)}&mode="view"&edit=${edit}&fillForms=${fillForms}&uiTheme=${uiTheme}`;

    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.json();
      })
      .then((data: TokenResponse) => {
        setToken(data.token);
        setConfig(data.config);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [fileType, title, url, edit, fillForms, uiTheme]);

  const onLoadComponentError = (
    errorCode: number,
    errorDescription: string,
  ) => {
    console.error(errorCode, errorDescription);
  };

  return (
    <>
      {token && config && (
        <DocumentEditor
          id="pdfEditor"
          documentServerUrl={
            process.env.ONLYOFFICE_DOCUMENT_SERVER_URL ||
            "https://asc.docs.teamlab.info"
          }
          config={{
            documentType: config.documentType,
            token,
            document: config.document,
            editorConfig: config.editorConfig,
          }}
          onLoadComponentError={onLoadComponentError}
        />
      )}
    </>
  );
};

export { OnlyOfficeEditor };
