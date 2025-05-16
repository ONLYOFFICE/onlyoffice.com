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
            <StyledHeroLeftButtonsWrapper>
              <StyledHeroLeftButtonGoogle
                as={"a"}
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.onlyoffice.documents"
              />
              <StyledHeroLeftButtonAppGallery
                as={"a"}
                target="_blank"
                href="https://appgallery.huawei.com/#/app/C102942717"
              />
            </StyledHeroLeftButtonsWrapper>
            <StyledHeroLeftImgWrapper>
              <StyledHeroLeftImg />
            </StyledHeroLeftImgWrapper>
          </StyledHeroLeft>
          <StyledHeroRight />
          <StyledHeroPhoneImgMob />
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
