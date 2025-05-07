import { Text } from "@src/components/ui/Text";
import { Trans, useTranslation } from "next-i18next";

import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftButton,
  StyledHeroLeftHeading,
  StyledHeroRight,
  StyledHeroLeftText,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroContainer,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("office-for-ios");
  return (
    <StyledHeroSection background="#fafafa">
      <StyledHeroContainer>
        <StyledHeroWrapper>
          <StyledHeroLeft>
            <StyledHeroLeftHeading size={2}>
              <Trans
                t={t}
                i18nKey="OnlyOfficeDocuments"
                components={[<Text key="0" as="span" color="main" label="0" />]}
              />
            </StyledHeroLeftHeading>
            <StyledHeroLeftButton
              as={"a"}
              target="_blank"
              href="https://itunes.apple.com/us/app/onlyoffice-documents/id944896972"
            />
            <StyledHeroLeftText size={3} color="#787878">
              <Trans
                t={t}
                i18nKey="AbsolutelyFree"
                components={[<Text key="0" as="span" color="main" label="0" />]}
              />
            </StyledHeroLeftText>
            <StyledHeroLeftImgWrapper>
              <StyledHeroLeftImg />
            </StyledHeroLeftImgWrapper>
          </StyledHeroLeft>
          <StyledHeroRight />
        </StyledHeroWrapper>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
