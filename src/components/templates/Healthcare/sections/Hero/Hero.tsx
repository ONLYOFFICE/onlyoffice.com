import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("healthcare");
  
console.log('Client translation:', t('OOForEducators'));

  return (
    <StyledHeroSection
      desktopSpacing={["190px", "170px"]}
      tabletSpacing={["176px", "88px"]}
      tabletSmallSpacing={["136px", "127px"]}
      mobileSpacing={["96px", "88px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText label={t("HeroText")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
