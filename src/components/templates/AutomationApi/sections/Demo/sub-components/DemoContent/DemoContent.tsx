import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetchApi } from "./lib/useFetchApi";
import { useIsMobile } from "./util/useIsMobile";
import { IDemoContentProps } from "./DemoContent.types";
import { StyledDemoContent } from "./DemoContent.styled";
import { CommentsPanel } from "./CommentsPanel";
import { ReviewPanel } from "./ReviewPanel";
import { FormsPanel } from "./FormsPanel";
import Script from "next/script";

interface IOnlyOfficeConnector {
  executeMethod(methodName: string, ...args: unknown[]): void;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DocsAPI?: any;
    docEditor?: {
      createConnector?: () => IOnlyOfficeConnector;
      destroyEditor?: () => void;
    };
    connector?: IOnlyOfficeConnector;
  }
}

export const DemoContentWithPanel = ({
  url,
  title,
  fileType,
  docType,
  mode,
  uiTheme,
  permissions,
  id,
}: IDemoContentProps & { id: number }) => {
  const { token, config } = useFetchApi(fileType, title, url, mode, uiTheme);
  const { locale } = useRouter();
  const { isMobile } = useIsMobile();

  const [editorConnector, setEditorConnector] = useState(null);
  const [readyToInit, setReadyToInit] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const check = () =>
        !!document.getElementById("editorContainer") &&
        !!window.DocsAPI?.DocEditor;
      if (check()) {
        setReadyToInit(true);
      } else {
        const int = setInterval(() => {
          if (check()) {
            clearInterval(int);
            setReadyToInit(true);
          }
        }, 200);
        return () => clearInterval(int);
      }
    }
  }, []);

  useEffect(() => {
    if (!readyToInit || !token || !config) return;

    try {
      const editor = new window.DocsAPI.DocEditor("editorContainer", {
        ...config,
        documentType: docType,
        permissions: permissions,
        token,
        type: isMobile ? "mobile" : "desktop",
        editorConfig: {
          ...config.editorConfig,
          user: { id: "1", name: "John Smith" },
          customization: { integrationMode: "embed" },
          lang: locale,
        },
        events: {
          onDocumentReady: () => {
            const connector = editor.createConnector?.();
            if (connector) {
              window.connector = connector;
              window.docEditor = editor;
              setEditorConnector(connector);
            }
          },
        },
      });
    } catch (err) {
      console.error("Failed to initialize ONLYOFFICE editor:", err);
    }
  }, [readyToInit, token, config, docType, isMobile, locale, permissions]);

  return (
    <>
      <Script
        src={`${process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL}/web-apps/apps/api/documents/api.js`}
        strategy="afterInteractive"
      />
      <div style={{ flex: 1, minWidth: 300, width: "100%" }}>
        {editorConnector ? (
          id === 3 ? (
            <FormsPanel connector={editorConnector} />
          ) : id === 2 ? (
            <ReviewPanel connector={editorConnector} />
          ) : (
            <CommentsPanel connector={editorConnector} />
          )
        ) : (
          <div></div>
        )}
      </div>
      <StyledDemoContent>
        <div
          id="editorContainer"
          style={{ width: "100%", height: "718px", flex: 3 }}
        />
      </StyledDemoContent>
    </>
  );
};
