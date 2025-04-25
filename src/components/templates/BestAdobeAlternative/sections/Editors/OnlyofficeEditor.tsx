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

  return (
    <Section>
      <Container>
        <div style={{ height: "704px", width: "100%" }}>
          <DocumentEditor
            id="pdfEditor"
            documentServerUrl="https://onlinedocs.onlyoffice.com"
            // documentServerUrl="https://documentserver/web-apps/apps/api/documents/api.js"
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
