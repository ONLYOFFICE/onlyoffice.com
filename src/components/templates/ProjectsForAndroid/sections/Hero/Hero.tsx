import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledButton,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { hero } from "./data";

const Hero = () => {
  const { t } = useTranslation("projects-for-android");

  return (
    <StyledHero
      desktopSpacing={["120px", "50px"]}
      tabletSpacing={["64px", "80px"]}
      tabletSmallSpacing={["64px", "32px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container maxWidth="1240px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey={t(hero.heading)}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText label={t(hero.text)} />
            <StyledButton $HeroImgUrl={t(hero.image.url)} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
