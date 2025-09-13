import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
  StyledHeroWrapper,
  StyledButton,
  StyledText
} from "./Hero.styled";
import { Button } from "@src/components/ui/Button";
import { hero } from "./data/hero";
import { Text } from "@src/components/ui/Text";
import { getAssetUrl } from "@utils/getAssetUrl";

const Hero = () => {
  const { t } = useTranslation("security");

  return (
    <StyledHero
      desktopSpacing={["182px", "134px"]}
      tabletSpacing={["152px", "28px"]}
      tabletSmallSpacing={["104px", "32px"]}
      mobileSpacing={["80px", "88px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey="TotalControl"
              />
            </StyledHeroHeading>
            <StyledHeroText>
              <StyledText label={t(hero.text)} className="first-text"/>
              <Text label={t(hero.textSec)}/>
            </StyledHeroText>
            <StyledButton>
              <Button as="a" href="https://github.com/ONLYOFFICE" label={t(hero.textBtn)} />
            </StyledButton>
          </StyledHeroContent>
          <StyledHeroImage
            $imgUrl={getAssetUrl(hero.imgUrl)}
            $imgHeight={hero.imgHeight}
            $imgWidth={hero.imgWidth}
          />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
