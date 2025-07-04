import { useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroSubheading,
  StyledHeroImage,
  StyledHeroHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";

const Hero = () => {
  const { t } = useTranslation("for-government");

  return (
    <StyledHeroSection
      desktopSpacing={["72px", "0px"]}
      tabletSpacing={["128px", "0px"]}
      tabletSmallSpacing={["128px", "0px"]}
      mobileSpacing={["96px", "0px"]}
    >
      <Container maxWidth="1419px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading level={1} size={2} label={t("HeroTitle")} /> 
            <StyledHeroSubheading level={2} size={5} label={t("HeroSubitle")} /> 
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
