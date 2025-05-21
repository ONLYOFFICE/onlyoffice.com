import { useTranslation } from "next-i18next";
import {
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroMedal,
  StyledHeroMedalsWrapper,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { medals } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("document-management");

  return (
    <StyledHeroSection
      desktopSpacing={["152px", "133px"]}
      tabletSpacing={["152px", "133px"]}
      tabletSmallSpacing={["137px", "115px"]}
      mobileSpacing={["96px", "49px"]}
    >
      <Container maxWidth="1295px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading size={2} label={t("HeroTitle")} />
            <StyledHeroText label={t("HeroText")} />
            <Button
              as="a"
              href="download-workspace?from=document-management"
              label={t("GetItNow")}
            />
          </StyledHeroContent>
          <StyledHeroImage
            $image={t("HeroImage")}
            $image2x={t("HeroImage2x")}
          />
          <StyledHeroMedalsWrapper>
            {medals.map(
              (
                { image, href, width, height, mobileWidth, mobileHeight },
                index,
              ) => (
                <StyledHeroMedal
                  key={index}
                  href={href}
                  target="_blank"
                  $logo={image}
                  $width={width}
                  $height={height}
                  $mobileWidth={mobileWidth}
                  $mobileHeight={mobileHeight}
                />
              ),
            )}
          </StyledHeroMedalsWrapper>
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
