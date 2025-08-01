import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroText
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("vacancies");

  return (
    <StyledHeroSection
      background="#f9f9f9"
      desktopSpacing={["136px", "64px"]}
      tabletSpacing={["128px", "64px"]}
      tabletSmallSpacing={["112px", "64px"]}
      mobileSpacing={["112px", "48px"]}
    >
      <Container>
        <StyledHeroHeading
          label={t("HeroHeadingWeAreHiring")}
          textAlign="center"
          size={1}
          level={1}
        />
        <StyledHeroText textAlign="center" size={1}>
          <Trans t={t} i18nKey={"HeroTextJoin"} components={[
              <Text as="span" color="main" key="0" />
            ]}
          />
        </StyledHeroText>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };