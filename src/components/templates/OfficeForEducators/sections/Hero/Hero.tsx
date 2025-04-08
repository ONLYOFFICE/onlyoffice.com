import { Trans, useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <StyledHero
      desktopSpacing={["120px", "48px"]}
      tabletSpacing={["120px", "48px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey="OfficeForEducators"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText label={t("BringYourLecturesToLife")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
