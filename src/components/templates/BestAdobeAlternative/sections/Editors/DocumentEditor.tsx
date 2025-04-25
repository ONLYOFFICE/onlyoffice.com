import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";


const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);


interface TokenResponse {
  token: string;
  config: {
    document: {
      fileType: string;
      key: string;
      title: string;
      url: string;
    };
    documentType: string;
    editorConfig: {
      mode: string;
      callbackUrl: string;
      customization: {
        uiTheme: string;
      };
    };
  };
}

export default function OnlyOfficeEditor() {

  const [token, setToken] = useState("");
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  
  const fileType = "pdf";
  const title = "Example Form Template Title.pdf";
  const url = "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";
  const uiTheme = "theme-dark";
  const mode = "view"; 

  
  useEffect(() => {
    setLoading(true);
    
    const apiUrl = `/api/document-editor?fileType=${fileType}&title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&mode=${mode}&uiTheme=${uiTheme}`;
    
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
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [fileType, title, url, mode, uiTheme]);

  
  const onLoadComponentError = (errorCode: number, errorDescription: string) => {
    console.error(errorCode, errorDescription);
  };

  return (
    <Section>
      <Container>
        <div style={{ height: "704px", width: "100%" }}>
          {token && config && (
            <DocumentEditor
              id="pdfEditor"
              documentServerUrl={process.env.ONLYOFFICE_DOCUMENT_SERVER_URL || "var_next_public_document_server_url"}
                config={{
                  documentType: config.documentType,
                  token,
                  document: config.document,
                  editorConfig: config.editorConfig,
                }}
                onLoadComponentError={onLoadComponentError}
              />
            )}
          </div>
      </Container>
    </Section>
  );
}
