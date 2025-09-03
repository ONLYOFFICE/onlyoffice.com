import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useFetchApi } from "./lib/useFetchApi";
import { useIsMobile } from "./util/useIsMobile";
import { IActionsContentProps } from "./ActionsContent.types";

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
  docType,
  mode,
  uiTheme,
  isCollaborate,
}: IActionsContentProps) => {
  const { token, config } = useFetchApi(fileType, title, url, mode, uiTheme);
  const { isMobile } = useIsMobile();
  const { locale } = useRouter();

  const onLoadComponentError = (
    errorCode: number,
    errorDescription: string,
  ) => {
    console.error(errorCode, errorDescription);
  };

  return (
    <>
      <StyledActionsContent>
        {token && config && (
          <DocumentEditor
            id="docxEditor"
            documentServerUrl={
              process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL || ""
            }
            config={{
              documentType: docType,
              token: token,
              document: config.document,
              editorConfig: {
                ...config.editorConfig,
                user: {
                  id: "1",
                  name: "John Smith",
                },
                customization: {
                  integrationMode: "embed",
                  pointerMode: "select",
                  slidePlayerBackground: "#444444",
                },
                lang: locale,
              },
              type: isMobile ? "mobile" : "desktop",
            }}
            onLoadComponentError={onLoadComponentError}
          />
        )}
      </StyledActionsContent>
      {isCollaborate && (
        <StyledActionsContent>
          {token && config && (
            <DocumentEditor
              id="docxEditor-2"
              documentServerUrl={
                process.env.NEXT_PUBLIC_ONLYOFFICE_DOCUMENT_SERVER_URL || ""
              }
              config={{
                documentType: docType,
                token: token,
                document: config.document,
                editorConfig: {
                  ...config.editorConfig,
                  user: {
                    id: "2",
                    name: "Kate Cage",
                  },
                  customization: {
                    integrationMode: "embed",
                    pointerMode: "select",
                    slidePlayerBackground: "#444444",
                  },
                  lang: locale,
                },
                type: isMobile ? "mobile" : "desktop",
              }}
              onLoadComponentError={onLoadComponentError}
            />
          )}
        </StyledActionsContent>
      )}
    </>
  );
};

export { ActionsContent };
