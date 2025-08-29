import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroQuotesSubtitle,
  StyledHeroQuotesText,
  StyledHeroQuotesTitle,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroVideoIframe,
  StyledHeroVideoWrapper,
  StyledHeroWrapperZh
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("about");
  const { locale } = useRouter();

  return (
    <StyledHeroSection
      $locale={locale ?? "en"}
      background="#F5F5F5"
    >
      <Container>
        {locale !== "zh" ? (
          <>
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
          </>
        ) : (
          <>
            <StyledHeroWrapperZh>
              <StyledHeroContent>
                <StyledHeroHeading level={1} size={2}>
                  <Trans t={t} i18nKey={"HeroHeadingRun"} components={[
                    <Text as={"span"} key={0} color="main" />
                  ]} />
                </StyledHeroHeading>
                <StyledHeroText
                  label={t("HeroTextOurMission")}
                  size={1}
                />
              </StyledHeroContent>

              <StyledHeroVideoWrapper>
                <StyledHeroVideoIframe
                  src={"//player.bilibili.com/player.html?aid=612698467&amp;bvid=BV1Qh4y1H7En&amp;cid=1102741138&amp;page=1&amp;spm_id_from=333.999.0.0"}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </StyledHeroVideoWrapper>
            </StyledHeroWrapperZh>

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
          </>
        )}

      </Container>
    </StyledHeroSection>
  );
};

export { Hero };