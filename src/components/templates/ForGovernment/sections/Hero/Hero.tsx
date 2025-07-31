import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
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
  const { locale } = useRouter();

  return (
    <StyledHeroSection
      desktopSpacing={["175px", "157px"]}
      tabletSpacing={["175px", "157px"]}
      tabletSmallSpacing={["136px", "88px"]}
      mobileSpacing={["96px", "0px"]}
    >
      <Container>
        <StyledHeroWrapper className={locale}>
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
