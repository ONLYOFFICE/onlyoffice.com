import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPresentationHeading,
  StyledPresentationImage,
  StyledPresentationLink,
} from "./Presentation.styled";
import { Text } from "@src/components/ui/Text";

const Presentation = () => {
  const { t } = useTranslation("best-adobe-alternative");

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
          href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7834835&doc=am9laktma2RnUWNSSjJ6NkZVUGNJVldaSUlkQnNLZmdLUG5iUkl2cVRDTT0_Ijc4MzQ4MzUi0"
          aria-label="Presentation ONLYOFFICE vs Adobe Acrobat"
          target="_blank"
        >
          <StyledPresentationImage
            src="/images/templates/best-adobe-alternative/presentation/presentation.jpg"
            alt="ONLYOFFICE Docs vs Adobe Acrobat"
          />
        </StyledPresentationLink>
      </Container>
    </Section>
  );
};

export { Presentation };
