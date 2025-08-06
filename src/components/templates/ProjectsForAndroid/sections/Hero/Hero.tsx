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
import { hero } from "./data/items";
import { ILocale } from "@src/types/locale";

const Hero = ({locale}: ILocale) => {
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
            <StyledButton as="a" $locale={locale} $HeroImgUrl={t(hero.image.url)} target={locale === "zh" ? "_self" : "_blank"} href={t(hero.btnHref)} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
