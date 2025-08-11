import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroSubheading,
  StyledHeroImage,
  StyledHeroHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("automation-api");

  return (
    <StyledHeroSection
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["128px", "121px"]}
      tabletSmallSpacing={["128px", "63px"]}
      mobileSpacing={["96px", "56px"]}
    >
      <Container maxWidth="1419px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroSubheading level={2} size={5} label={t("HeroSubtitle")} />
            <Button
              as="a"
              href="mailto:sales@onlyoffice.com"
              label={t("HeroButton")}
            />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
