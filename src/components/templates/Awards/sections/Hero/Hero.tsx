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
import { Link } from "@src/components/ui/Link";

const Hero = () => {
  const { t } = useTranslation("awards");

  return (
    <StyledHeroSection
      desktopSpacing={["180px", "177px"]}
      tabletSpacing={["128px", "121px"]}
      tabletSmallSpacing={["128px", "63px"]}
      mobileSpacing={["96px", "56px"]}
    >
      <Container>
        <StyledHeroHeading level={1} size={2} label={t("HeroTitle")} />
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroSubheading level={2} size={5} label={t("HeroSubtitle")} />
            <Link
              href="https://www.cloudcomputing-insider.de/it-awards-2024-gewinner-a-0eff7f083cda3aea4c1b8c23ef107b60/"
              color="main"
              textUnderline
              hover="underline-none"
              target="_blank"
            >{t("HeroLink")}</Link>
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
