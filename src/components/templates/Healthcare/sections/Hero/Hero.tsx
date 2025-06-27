import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroWrapper,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("healthcare");
  
console.log('Client translation:', t('OOForEducators'));

  return (
    <StyledHeroSection
      desktopSpacing={["162px", "162px"]}
      tabletSpacing={["162px", "162px"]}
      tabletSmallSpacing={["162px", "10px"]}
      mobileSpacing={["120px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading label={t("HeroTitle")} />
            <StyledHeroText label={t("HeroText")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
