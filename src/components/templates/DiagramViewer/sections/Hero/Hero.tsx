import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import {
  StyledHeroButtonWrapper,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroImageWrapper,
  StyledHeroNoWrapText,
  StyledHeroSection,
  StyledHeroSubHeading,
  StyledHeroYouTubeWrapper,
  StyledYouTubeCard
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("diagram-viewer");
  const { locale } = useRouter();

  return (
    <StyledHeroSection
      background="#292B6B"
      desktopSpacing={["152px", "0"]}
      tabletSpacing={["136px", "0"]}
      tabletSmallSpacing={["136px", "0"]}
      mobileSpacing={["88px", "40px"]}
    >
      <Container>
        <StyledHeroHeading
          textAlign="center"
          color="#fff"
        >
          <Trans
            t={t}
            i18nKey="OnlineDiagramViewerForYourWebApp"
            components={[
              <Text key="0" as={"span"} color="main" />,
              <StyledHeroNoWrapText key="1" as={"span"}  />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroSubHeading
          label={t("ViewAndNavigateMicrosoftVisioDiagramsWithEase")}
          textAlign="center"
          color="#fff"
          level={3}
          size={4}
        />
        <StyledHeroButtonWrapper>
          <Button
            as="a"
            href="/download#docs-enterprise"
            label={t("GetItNow")}
            borderRadius="3px"
          />
        </StyledHeroButtonWrapper>
          {locale === "zh" ? (
            <StyledHeroImageWrapper>
              <StyledHeroImage
                $imageUrl={t("HeroImageHeader")}
                $imageUrl2x={t("HeroImageHeader@2x")}
              />
            </StyledHeroImageWrapper>
          ) : (
            <StyledHeroYouTubeWrapper>
              <StyledYouTubeCard
                videoImgUrl={t("HeroYouTubeCoverHeader@2x")}
                videoUrl={t("HeroYouTubeUrl")}
                border={true}
              />
            </StyledHeroYouTubeWrapper>
          )}
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };