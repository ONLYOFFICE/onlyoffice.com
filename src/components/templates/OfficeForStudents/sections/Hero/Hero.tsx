import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { hero } from "./data/hero";

const Hero = () => {
  const { t } = useTranslation("office-for-students");

  return (
    <StyledHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey={String(hero.title)}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText label={t(hero.text)} />
          </StyledHeroContent>
          <StyledHeroImage
            $imgUrl={hero.imgUrl}
            $imgHeight={hero.imgHeight}
            $imgWidth={hero.imgWidth}
          />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
