import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { hero } from "./data/hero";

const Hero = () => {
  const { t } = useTranslation("resellers");

  return (
    <StyledHero
      desktopSpacing={["146px", "149px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["112px", "64px"]}
      mobileSpacing={["96px", "48px"]}
      background="#F9F9F9"
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading size={2}>
              <Trans
                t={t}
                i18nKey={String(hero.title)}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <Text label={t(hero.text)} />
            <Button
              id={hero.button.id}
              as="a"
              href={hero.button.href}
              label={t(hero.button.label)}
            />
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
