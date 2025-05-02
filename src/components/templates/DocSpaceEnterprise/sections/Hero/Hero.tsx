import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import {
  StyledHero,
  StyledHeroBtnWrapper,
  StyledHeroImgWrapper,
  StyledHeroContainer,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <StyledHero
      desktopSpacing={["142px", "0"]}
      tabletSpacing={["136px", "0"]}
      tabletSmallSpacing={["136px", "0"]}
      mobileSpacing={["96px", "0"]}
    >
      <StyledHeroContainer>
        <Heading
          level={1}
          label={t("OnlyOfficeDocSpaceEnterprise")}
          size={1}
          textAlign="center"
        />
        <Text label={t("TheEnterpriseScaledSpace")} />
        <StyledHeroBtnWrapper>
          <Button
            as="a"
            href="/download#docspace-enterprise"
            label={t("GetItNow")}
            variant="primary"
          />
          <Button
            as="a"
            href="/docspace-registration?from=docspace_enterprise"
            label={t("TryItFree")}
            variant="secondary"
          />
        </StyledHeroBtnWrapper>
      </StyledHeroContainer>
      <StyledHeroImgWrapper>
        <img
          src="/images/templates/docspace-enterprise/hero/main_picture.svg"
          alt={t("HeroMainPictureAltText")}
        />
      </StyledHeroImgWrapper>
    </StyledHero>
  );
};

export { Hero };
