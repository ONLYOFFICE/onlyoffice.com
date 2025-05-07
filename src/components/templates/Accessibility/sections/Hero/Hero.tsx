import { useTranslation } from "next-i18next";
import {
  StyledContainer,
  StyledHero,
  StyledPageDescription,
  StyledPageTitle,
  StyledWrapper,
  StyledImage,
} from "./Hero.styled";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("accessibility");
  return (
    <StyledHero
      desktopSpacing={["109px", "181px"]}
      tabletSpacing={["109px", "181px"]}
      tabletSmallSpacing={["112px", "88px"]}
      mobileSpacing={["48px", "48px"]}
      background="#F9F9F9"
    >
      <StyledContainer maxWidth="1280px">
        <StyledWrapper>
          <StyledPageTitle>{t("HeroTitle")}</StyledPageTitle>
          <StyledPageDescription>{t("HeroDescription")}</StyledPageDescription>
          <Button
            as="a"
            id="hero-try-it-now"
            label={t("HeroButtonLabel")}
            href="/download#docs-enterprise"
          />
        </StyledWrapper>
        <StyledImage />
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
