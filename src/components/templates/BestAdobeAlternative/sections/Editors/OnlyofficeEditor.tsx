import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useMemo, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

export default function OnlyOfficeEditor() {
  const [token, setToken] = useState("");
  const documentKey = useMemo(() => uuidv4(), []);

  const fileType = "pdf";
  const title = "Example Form Template Title.pdf";
  const url = "https://static.onlyoffice.com/assets/docs/samples/oform.pdf";

  const payload = {
    document: {
      fileType: fileType,
      key: documentKey,
      title: title,
      url: url,
      // permissions: {
      //   edit: true,
      //   fillForms: false,
      // },
    },
    editorConfig: {
      mode: "view",
      // mode: "edit",
      callbackUrl: "https://example.com/url-to-callback.ashx",
    },
  };

  useEffect(() => {
    fetch("/api/onlyoffice-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  }, []);

  return (
    <Section>
      <Container>
        <div style={{ height: "704px", width: "100%" }}>
          <DocumentEditor
            id="pdfEditor"
            documentServerUrl={process.env.ONLYOFFICE_DOCUMENT_SERVER_URL!}
            // documentServerUrl="https://asc.docs.teamlab.info"
            config={{
              documentType: fileType,
              token,
              document: {
                fileType,
                key: documentKey,
                title,
                url,
              },
            }}
          />
        </div>
      </Container>
    </Section>
  );
}
