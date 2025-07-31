import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { useRouter } from "next/router";

const Hero = () => {
  const { t } = useTranslation("certificates");
  const locale = useRouter();

  return (
    <StyledHeroSection
      forwardedAs="div"
      desktopSpacing={["32px", "54px"]}
      tabletSpacing={["32px", "54px"]}
      tabletSmallSpacing={["40px", "0"]}
      mobileSpacing={["16px", "8px"]}
    >
      <StyledHeroContainer maxWidth="1280px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading level={1} size={1} $locale={locale.locale}>
              <Trans
                t={t}
                i18nKey="OOCertificates"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledHeroHeading>
            <StyledHeroText
              label={t("ExploreOfficialCertifications")}
              $locale={locale.locale}
            />
          </StyledHeroContent>

          <StyledHeroImage />
        </StyledHeroWrapper>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
