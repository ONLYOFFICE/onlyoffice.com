import { Trans, useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroLogo,
  StyledBackButton,
  StyledBackButtonIcon,
  StyledBackButtonText
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("docspace-registration");

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <StyledHero
      desktopSpacing={["80px", "80px"]}
      tabletSpacing={["60px", "60px"]}
      tabletSmallSpacing={["40px", "40px"]}
      mobileSpacing={["30px", "30px"]}
      background="#F9F9F9"
    >
      <Container maxWidth="1277px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledBackButton onClick={handleBackClick}>
              <StyledBackButtonIcon />
              <StyledBackButtonText>{t("BackToPrevious")}</StyledBackButtonText>
            </StyledBackButton>
            <StyledHeroLogo />
            <StyledHeroHeading size={2}>
              <Trans
                t={t}
                i18nKey="SecureSpace"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText size={1} label={t("HeroText")} />
          </StyledHeroContent>
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
