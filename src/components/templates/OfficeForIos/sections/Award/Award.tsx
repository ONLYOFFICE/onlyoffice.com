import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledAwardContent,
  StyledAwardHeading,
  StyledAwardLogo,
  StyledAwardLink,
  StyledAwardText,
  StyledAwardQuotes,
} from "./Award.styled";

const Award = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <Section
      background="#FAFAFA"
      desktopSpacing={["196px", "147px"]}
      tabletSpacing={["196px", "147px"]}
      tabletSmallSpacing={["196px", "147px"]}
      mobileSpacing={["150px", "80px"]}
    >
      <Container maxWidth="912px">
        <StyledAwardContent>
          <StyledAwardLogo />
          <StyledAwardHeading
            level={4}
            size={4}
            label={t("OnlyOfficeDocumentsIs")}
            textAlign="center"
          />
          <StyledAwardText
            label={t("MichaelGanss")}
            textAlign="center"
            size={4}
            fontWeight={700}
            color="#666666"
          />
          <StyledAwardLink
            label="UpdateStar.com"
            href="http://onlyoffice-documents.updatestar.com/"
            target="_blank"
            color="main"
            textUnderline={true}
            hover="underline-none"
            fontSize="13px"
          />
          <StyledAwardQuotes />
        </StyledAwardContent>
      </Container>
    </Section>
  );
};

export { Award };
