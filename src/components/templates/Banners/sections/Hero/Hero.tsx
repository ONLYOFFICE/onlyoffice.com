import { useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";

const Hero = () => {
  const { t } = useTranslation("banners");

  return (
    <StyledHeroSection
      desktopSpacing={["80px", "0px"]}
      tabletSpacing={["80px", "0px"]}
      tabletSmallSpacing={["80px", "0px"]}
      mobileSpacing={["80px", "0px"]}
    >
      <Container maxWidth="1050px">
        <StyledHeroHeading level={1} size={2} label={t("HeroTitle")} />
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
