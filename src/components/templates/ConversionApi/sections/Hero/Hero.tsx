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
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("conversion-api");
  return (
    <StyledHeroSection
      desktopSpacing={["172px", "105px"]}
      tabletSpacing={["172px", "105px"]}
      tabletSmallSpacing={["128px", "107px"]}
      mobileSpacing={["96px", "35px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading label={t("HeroTitle")} />
            <StyledHeroText label={t("HeroText")} />
            <Button
              label={t("GetStarted")}
              as="a"
              href="https://api.onlyoffice.com/docs/document-builder/get-started/overview/"
              target="_blank"
            />
          </StyledHeroContent>
          <StyledHeroImage
            src="/images/templates/conversion-api/hero/hero-image.svg"
            alt={t("HeroText")}
          />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
