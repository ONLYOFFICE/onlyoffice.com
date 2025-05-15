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

  console.log("token", token);
  console.log("config", config);

  const mode = "edit";
  const title = "Example Document Title.pdf";
  const fileType = "pdf";
  const url = "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";
  const uiTheme = "theme-dark";

  useEffect(() => {
    const apiUrl = `/api/document-editor?fileType=${fileType}&title=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(url)}&mode=${mode}&uiTheme=${uiTheme}`;

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
      .then((data: ITokenResponse) => {
        setToken(data.token);
        setConfig(data.config);
      })
      .catch((err) => {
        console.error(err);
      });
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
        <iframe
          width="100%"
          height="100%"
          src="https://site.docs.onlyoffice.com/8.3.3-0d10b80972d36ff5a943a921d724982a/web-apps/apps/pdfeditor/main/index.html?_dc=8.3.3-18&lang=en&customer=ONLYOFFICE&type=desktop&frameEditorId=editorPlaceholder&parentOrigin=https://www.onlyoffice.com&fileType=pdf&isForm=false"
        />
        {/* <iframe
          width="100%"
          height="100%"
          src="https://site.docs.onlyoffice.com/8.3.3-0d10b80972d36ff5a943a921d724982a/web-apps/apps/common/index.html?_dc=8.3.3-18&lang=en&customer=ONLYOFFICE&type=desktop&frameEditorId=editorPlaceholder&parentOrigin=https://www.onlyoffice.com&fileType=pdf"
        /> */}
        {/* <iframe
          width="100%"
          height="100%"
          src="https://static.onlyoffice.com/assets/docs/samples/oform.pdf"
        /> */}
      </StyledActionsContent>
    </Container>
  );
};

export { Actions };

// {
//   /* <iframe
//           src="https://site.docs.onlyoffice.com/8.3.3-0d10b80972d36ff5a943a921d724982a/web-apps/apps/documenteditor/main/index.html?_dc=8.3.3-18&lang=en&customer=ONLYOFFICE&type=desktop&frameEditorId=editorPlaceholder&isForm=false&parentOrigin=https://www.onlyoffice.com&fileType=docx"
//           width="100%"
//           height="100%"
//           name="frameEditor"
//           allow="autoplay; camera; microphone; display-capture; clipboard-write;"
//         /> */
// }
