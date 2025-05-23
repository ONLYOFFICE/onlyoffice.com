import { useRouter } from "next/router";
import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";

import {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftButtonGoogle,
  StyledHeroLeftButtonAppGallery,
  StyledHeroLeftHeading,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroRight,
  StyledHeroPhoneImgMob,
  StyledHeroFooterHeading,
  StyledHeroFooterImg,
  StyledHeroFooterText,
  StyledHeroFooter,
  StyledHeroLeftButtonsWrapper,
  StyledHeroFooterLink,
} from "./Hero.styled";

const Hero = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("office-for-android");

  return (
    <StyledHeroSection
      background="#fafafa"
      desktopSpacing={["112px", "0"]}
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
                components={[<Text key="0" as="span" color="main" label="0" />]}
              />
            </StyledHeroLeftHeading>
            <StyledHeroLeftButtonsWrapper $isZhLocale={locale === "zh"}>
              <StyledHeroLeftButtonGoogle
                $backgroundUrl={t("ButtonGoogleUrl")}
                $isZhLocale={locale === "zh"}
                as={"a"}
                target="_blank"
                href={locale === "zh" ? "/zh/download-desktop#mobile" : "https://play.google.com/store/apps/details?id=com.onlyoffice.documents"}
              />
              <StyledHeroLeftButtonAppGallery
                $backgroundUrl={t("ButtonAppGalleryUrl")}
                as={"a"}
                target="_blank"
                href="https://appgallery.huawei.com/#/app/C102942717"
              />
              {locale === "zh" && (
                <StyledHeroLeftButtonAppGallery
                  $backgroundUrl="/images/templates/office-for-android/buttons/black-apk.svg"
                  as={"a"}
                  target="_blank"
                  href="https://download.onlyoffice.com/install/mobile/android/onlyoffice-documents.apk"
                />
              )}
            </StyledHeroLeftButtonsWrapper>
            <StyledHeroLeftImgWrapper>
              <StyledHeroLeftImg $backgroundUrl={t("HeroLeftImageUrl")} $backgroundUrl2x={t("HeroLeftImageUrl2x")} />
            </StyledHeroLeftImgWrapper>
          </StyledHeroLeft>
          <StyledHeroRight $backgroundUrl={t("HeroRightImageUrl")} $backgroundUrl2x={t("HeroRightImageUrl2x")} />
          <StyledHeroPhoneImgMob $backgroundUrl={t("HeroLeftImageUrl")} $backgroundUrl2x={t("HeroLeftImageUrl2x")} />
          <StyledHeroFooter>
            <StyledHeroFooterImg />
            <StyledHeroFooterHeading
              level={3}
              size={5}
              textAlign="center"
              label={t("AnOptionToConsider")}
            />
            <StyledHeroFooterLink
              label={t("EliesGuzman")}
              href="https://www.malavida.com/en/soft/onlyoffice-documents/android/#gref"
              target="_blank"
              color="main"
              textUnderline={true}
              hover="underline-none"
            />
            <StyledHeroFooterText
              size={4}
              label={t("Malavida")}
              textAlign="center"
              color="#aaaaaa"
            />
          </StyledHeroFooter>
        </StyledHeroWrapper>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
