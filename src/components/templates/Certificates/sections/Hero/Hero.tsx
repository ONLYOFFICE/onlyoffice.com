import { Trans, useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("certificates");

  return (
    <StyledHeroSection
      desktopSpacing={["32px", "54px"]}
      tabletSpacing={["56px", "54px"]}
      tabletSmallSpacing={["40px", "0"]}
      mobileSpacing={["16px", "0"]}
    >
      <StyledHeroContainer>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OOCertificates"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <StyledHeroText label={t("ExploreOfficialCertifications")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
