import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPresentationHeading,
  StyledPresentationLink,
} from "./Presentation.styled";
import { Text } from "@src/components/ui/Text";

const Presentation = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

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
          href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8116264&doc=NUxoK0F3MVFoZjlQZ3o2Q1VTNmtiUm1SWE5zR0o4a2svYVI0RmFvYUJoQT0_IjgxMTYyNjQi0"
          aria-label="Presentation ONLYOFFICE vs Google Docs"
          target="_blank"
        >
          <img
            width="100%"
            height="100%"
            src="/images/templates/best-libreoffice-alternative/presentation/presentation.jpg"
            alt="ONLYOFFICE Docs vs Google Docs"
          />
        </StyledPresentationLink>
      </Container>
    </Section>
  );
};

export { Presentation };
