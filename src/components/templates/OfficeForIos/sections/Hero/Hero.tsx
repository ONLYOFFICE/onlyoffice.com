import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";

import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftButton,
  StyledHeroLeftHeading,
  StyledHeroLeftText,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroRight,
  StyledHeroPhoneImgMob,
  StyledHeroFooterHeading,
  StyledHeroFooterImgLink,
  StyledHeroFooterText,
  StyledHeroFooter,
  StyledDownloadButton,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("office-for-ios");
  return (
    <StyledHeroSection
      background="#fafafa"
      desktopSpacing={["72px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <StyledHeroContainer tabletSpacing="16px">
        <StyledHeroWrapper>
          <StyledHeroLeft>
            <StyledHeroLeftHeading size={2}>
              <Trans
                t={t}
                i18nKey="OnlyOfficeDocuments"
                components={[
                  <Text key="0" as="span" color="main" label="0" />,
                  <br key={1} />,
                ]}
              />
            </StyledHeroLeftHeading>
            <StyledHeroLeftButton>
              <StyledDownloadButton
                platform="app-store"
                variant="secondary"
                href="https://itunes.apple.com/us/app/onlyoffice-documents/id944896972"
                target="_blank"
              />
            </StyledHeroLeftButton>
            <StyledHeroLeftText size={3} color="#787878">
              <Trans
                t={t}
                i18nKey="AbsolutelyFree"
                components={[<Text key="0" as="span" color="main" label="0" />]}
              />
            </StyledHeroLeftText>
            <StyledHeroLeftImgWrapper>
              <StyledHeroLeftImg
                $backgroundUrl={getAssetUrl(t("HeroImageLeftUrl"))}
                $backgroundUrl2x={t("HeroImageLeftUrl2x")}
              />
            </StyledHeroLeftImgWrapper>
          </StyledHeroLeft>
          <StyledHeroRight
            $backgroundUrl={getAssetUrl(t("HeroImageRightUrl"))}
            $backgroundUrl2x={t("HeroImageRightUrl2x")}
          />
          <StyledHeroPhoneImgMob
            $backgroundUrl={getAssetUrl(t("HeroImageLeftUrl"))}
            $backgroundUrl2x={t("HeroImageLeftUrl2x")}
          />
          <StyledHeroFooter>
            <StyledHeroFooterImgLink
              href="https://www.educationalappstore.com/app/onlyoffice-documents"
              target="_blank"
            />
            <StyledHeroFooterHeading size={3} textAlign="center">
              <Trans
                t={t}
                i18nKey="OneAppThreeEditors"
                components={[<Text key="0" as="span" color="main" label="0" />]}
              />
            </StyledHeroFooterHeading>
            <StyledHeroFooterText
              size={1}
              label={t("CompatibleWithMSOffice")}
              textAlign="center"
            />
          </StyledHeroFooter>
        </StyledHeroWrapper>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
