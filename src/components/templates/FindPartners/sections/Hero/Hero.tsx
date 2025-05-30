import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";

import {
  StyledHeroButton,
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroText
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("find-partners");

  return (
    <StyledHeroSection
      desktopSpacing={["152px", "0"]}
      tabletSpacing={["144px", "0"]}
      tabletSmallSpacing={["112px", "0"]}
      mobileSpacing={["96px", "0"]}
    >
      <Container maxWidth="1008px">
        <StyledHeroHeading
          level={1}
          size={2}
          label={t("HeroHeadingOnlyOffice")}
          textAlign="center"
        />
        <StyledHeroText
          label={t("HeroTextOnlyOffice")}
          size={1}
          textAlign="center"
        />
        <StyledHeroButton label={t("HeroButtonBecome")} borderRadius="3px"  />
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };