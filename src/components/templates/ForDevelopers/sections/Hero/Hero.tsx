import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroSubheading,
  StyledHeroImage,
  StyledHeroHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("for-developers");

  return (
    <StyledHeroSection
      desktopSpacing={["112px", "153px"]}
      tabletSpacing={["88px", "88px"]}
      tabletSmallSpacing={["80px", "80px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container maxWidth="1280px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroSubheading level={2} size={5} label={t("HeroSubitle")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
