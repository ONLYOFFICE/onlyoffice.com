import { useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { StyledDocumentsHeading } from "./Documents.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Documents = () => {
  const { t } = useTranslation("office-for-zapier");

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);
  return (
    <Section background="#f9f9f9">
      <Container>
      <StyledDocumentsHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="ZapTemplates"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledDocumentsHeading>

        <div>
          {/* @ts-expect-error Custom Zapier web component not included in JSX types */}
          <zapier-workflow
            client-id="DlXoq9VPMUe1Z8PyHtDDyVgROoq7YcONFrgaaAHL"
            theme="light"
            intro-copy-display="hide"
            manage-zaps-display="hide"
            app-search-bar-display="show"
            template-ids="1756294,1741419,1759963,1756593,1756936,1755732"
            template-style="row"
            zap-create-from-scratch-display="hide"
          />
        </div>
      </Container>
    </Section>
  );
};

export { Documents };
