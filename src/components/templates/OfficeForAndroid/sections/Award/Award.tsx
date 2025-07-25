import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next";

import {
  StyledAwardFooter,
  StyledAwardFooterHeading,
  StyledAwardFooterImgLink,
  StyledAwardFooterText,
} from "./Award.styled";

const Award = () => {
  const { t } = useTranslation("office-for-android");
  return (
    <Section
      background="#fafafa"
      desktopSpacing={["88px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledAwardFooter>
          <StyledAwardFooterImgLink
            href="https://www.educationalappstore.com/app/onlyoffice-documents"
            target="_blank"
          />
          <StyledAwardFooterHeading
            size={3}
            textAlign="center"
            label={t("OneAppForYourText")}
          />
          <StyledAwardFooterText
            size={1}
            label={t("CompatibleWithMSOffice")}
            textAlign="center"
          />
        </StyledAwardFooter>
      </Container>
    </Section>
  );
};

export { Award };
