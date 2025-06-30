import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

import {
  StyledHeroButtonsWrapper,
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroSpan,
  StyledHeroVideoIframe,
  StyledHeroVideoWrapper
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("docspace-developer");

  return (
    <StyledHeroSection
      desktopSpacing={["184px", "56px"]}
      tabletSpacing={["184px", "56px"]}
      tabletSmallSpacing={["152px", "48px"]}
      mobileSpacing={["102px", "0"]}
    >
      <Container maxWidth="1007px">
        <StyledHeroHeading level={1} size={1} textAlign="center" color="#fff">
          <Trans
            t={t}
            i18nKey={"HeroHeading"}
            components={[
              <StyledHeroSpan as="span" color="#fff" key={0} />,
              <br key={1} />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroButtonsWrapper>
          <Button
            as="a"
            href="/download-developer#docspace-developer"
            label={t("HeroButtonGet")}
            borderRadius="3px"
          />
          <Button
            as="a"
            href="/demo-order" label={t("HeroButtonSchedule")}
            variant="quinary"
            borderRadius="3px"
          />
        </StyledHeroButtonsWrapper>
        <StyledHeroVideoWrapper>
          <StyledHeroVideoIframe
            src={t("HeroYoutubeUrl")}
            title={t("HeroVideoTitle")}
            name={t("HeroYouTubeAttributeName")}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </StyledHeroVideoWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };