import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroButtonsWrapper,
  StyledHeroContent,
  StyledHeroSection,
  StyledHeroVideo,
  StyledHeroVideoText,
  StyledHeroVideoWrapper,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";

const Hero = () => {
  const { t } = useTranslation("document-editor-comparison");

  return (
    <StyledHeroSection
      desktopSpacing={["158px", "98px"]}
      tabletSpacing={["158px", "98px"]}
      tabletSmallSpacing={["136px", "109px"]}
      mobileSpacing={["96px", "58px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading size={2}>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("HeroText")} />
          </StyledHeroContent>
          <StyledHeroButtonsWrapper>
            <Button
              id="hero-get-it-now"
              as="a"
              href="download?from=downloadintegrationmenu#docs-enterprise"
              label={t("GetItNow")}
            />
            <Button
              id="hero-see-it-in-action"
              as="a"
              href="/see-it-in-action"
              variant="tertiary"
              label={t("SeeItInAction")}
            />
          </StyledHeroButtonsWrapper>
          <StyledHeroVideoWrapper>
            <StyledHeroVideo src="https://www.youtube.com/embed/JzqxSas5OpY?si=ilgMB8HpWDMkAVZp" />
            <StyledHeroVideoText label={t("HeroVideoText")} />
          </StyledHeroVideoWrapper>
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
