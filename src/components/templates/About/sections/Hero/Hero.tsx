import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledHeroHeading,
  StyledHeroQuotesSubtitle,
  StyledHeroQuotesText,
  StyledHeroQuotesTitle,
  StyledHeroSection,
  StyledHeroText
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("about");

  return (
    <StyledHeroSection
      background="#F5F5F5"
      desktopSpacing={["184px", "60px"]}
      tabletSpacing={["176px", "60px"]}
      tabletSmallSpacing={["96px", "48px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroHeading level={1} size={2}>
          <Trans t={t} i18nKey={"HeroHeadingRun"} components={[
            <Text as={"span"} key={0} color="main" />
          ]} />
        </StyledHeroHeading>
        <StyledHeroText
          label={t("HeroTextOurMission")}
          size={1}
        />
        <StyledHeroQuotesText
          label={t("HeroQuotesTextWeWant")}
          textAlign="center"
          size={3}
          fontStyle="italic"
        />
        <StyledHeroQuotesTitle
          label={t("HeroQuotesTitleLevBannov")}
          textAlign="center"
          size={3}
        />
        <StyledHeroQuotesSubtitle
          label={t("HeroQuotesSubtitleFounder")}
          textAlign="center"
          size={3}
        />
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };