import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPresentationHeading,
  StyledPresentationLink,
} from "./Presentation.styled";
import { Text } from "@src/components/ui/Text";

const Presentation = () => {
  const { t } = useTranslation("best-google-docs-alternative");

  return (
    <Section background="#F9F9F9" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledPresentationHeading level={3} size={4} textAlign="center">
          <Trans
            t={t}
            i18nKey="PresentationTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledPresentationHeading>
        <StyledPresentationLink
          href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7720629&doc=WU8vNFJFVU5WWmlEZExXU0RVank0SWJRbTNKbVVqQUZod0x2ZjMwOTlQaz0_Ijc3MjA2Mjki0"
          aria-label="Presentation ONLYOFFICE vs Google Docs"
          target="_blank"
        >
          <img
            width="100%"
            height="100%"
            src="/images/templates/best-google-docs-alternative/presentation/presentation.jpg"
            alt="ONLYOFFICE Docs vs Google Docs"
          />
        </StyledPresentationLink>
      </Container>
    </Section>
  );
};

export { Presentation };
