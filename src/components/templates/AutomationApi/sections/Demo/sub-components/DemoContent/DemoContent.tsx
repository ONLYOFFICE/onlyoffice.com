import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useFetchApi } from "./lib/useFetchApi";
import { useIsMobile } from "./util/useIsMobile";
import { IDemoContentProps } from "./DemoContent.types";
import { useEffect, useRef, useState } from "react";
import { StyledDemoContent } from "./DemoContent.styled";

declare global {
  interface Window {
    comments: any[];
    indexComment: number;
    connector: any;
    docEditor: any;
  }
}

window.comments = [];
window.indexComment = 0;

const DocumentEditor = dynamic(
  () =>
    import("@onlyoffice/document-editor-react").then(
      (mod) => mod.DocumentEditor,
    ),
  { ssr: false },
);

const DemoContent = ({
  url,
  title,
  fileType,
  docType,
  mode,
  uiTheme,
  isCollaborate,
}: IDemoContentProps) => {

  const { token, config } = useFetchApi(fileType, title, url, mode, uiTheme);
  const { isMobile } = useIsMobile();
  const { locale } = useRouter();
  const commentsRef = useRef<any[]>([]);
  const indexCommentRef = useRef(0);

  const onLoadComponentError = (
    errorCode: number,
    errorDescription: string,
  ) => {
    console.error(errorCode, errorDescription);
  };

  return (
    <>
      <StyledDemoContent>
        {token && config && (
          <DocumentEditor
            id="docxEditor"
            documentServerUrl={process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL || ""}
            config={{
              documentType: docType,
              token: token,
              document: config.document,
              editorConfig: {...config.editorConfig,
                user: {
                  id: "1",
                  name: "John Smith",
                },
                customization: {
                  integrationMode: "embed"
                },
                lang: locale,
              },
              type: isMobile ? "mobile" : "desktop",
            }}
            onLoadComponentError={onLoadComponentError}
          />
        )}
      </StyledDemoContent>
    </>
  );
};

export { DemoContent };
