import dynamic from "next/dynamic";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

export default function OnlyOfficeEditor() {
  const documentKey = useMemo(() => uuidv4(), []);

  return (
    <Section>
      <Container>
        <div style={{ height: "704px", width: "100%" }}>
          <DocumentEditor
            id="pdfEditor"
            documentServerUrl="https://onlinedocs.onlyoffice.com"
            // documentServerUrl="https://documentserver/web-apps/apps/api/documents/api.js"
            config={{
              document: {
                fileType: "pdf",
                // key: documentKey,
                key: "E7FAFC9C22A8",
                title: "Example Form Template Title.pdf",
                url: "https://static.onlyoffice.com/assets/docs/samples/oform.pdf",
              },
              documentType: "pdf",
              editorConfig: {
                mode: "view",
                callbackUrl: "https://example.com/url-to-callback.ashx",
              },
            }}
          />
        </div>
      </Container>
    </Section>
  );
}
