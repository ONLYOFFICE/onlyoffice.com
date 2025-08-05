import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import * as S from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("education");

  return (
    <S.StyledHeroSection
      desktopSpacing={["162px", "162px"]}
      tabletSpacing={["162px", "162px"]}
      tabletSmallSpacing={["162px", "10px"]}
      mobileSpacing={["120px", "48px"]}
    >
      <Container>
        <S.StyledHeroWrapper>
          <S.StyledHeroContent>
            <S.StyledHeroHeading label={t("HeroTitle")} />
            <S.StyledHeroText label={t("HeroText")} />
          </S.StyledHeroContent>
          <S.StyledHeroImage />
        </S.StyledHeroWrapper>
      </Container>
    </S.StyledHeroSection>
  );
};

export { Hero };
