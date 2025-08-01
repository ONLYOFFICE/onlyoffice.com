import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroImage,
  StyledHeroText,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <StyledHero
      desktopSpacing={["142px", "77px"]}
      tabletSpacing={["142px", "77px"]}
      tabletSmallSpacing={["104px", "98px"]}
      mobileSpacing={["96px", "39px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading>
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <StyledHeroText size={1} label={t("HeroText")} />
          <Button as="a" href="#form" label={t("GetStarted")} />
          <StyledHeroImage
            src="/images/templates/influencer-program/hero/hero_img.svg"
            alt={t("HeroTitle")}
          />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
