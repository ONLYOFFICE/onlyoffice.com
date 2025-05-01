import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import {
  StyledHero,
  StyledHeroBtnWrapper,
  StyledHeroImgWrapper,
  StyledHeroWorldwide,
  StyledHeroWorldwideImgWrapper,
  StyledHeroWrapper,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <StyledHero $imgUrl="/images/templates/docspace-enterprise/hero/bg.svg">
      <StyledHeroWrapper>
        <Heading level={1} label={t("OnlyOfficeDocSpaceEnterprise")} />
        <Text label={t("TheEnterpriseScaledSpace")} />
        <StyledHeroBtnWrapper>
          <Button
            as="a"
            target="_blank"
            label={t("GetItNow")}
            variant="primary"
            borderRadius="3px"
          />
          <Button
            as="a"
            target="_blank"
            label={t("TryItFree")}
            variant="secondary"
            borderRadius="3px"
          />
        </StyledHeroBtnWrapper>
      </StyledHeroWrapper>
      <StyledHeroImgWrapper>
        <img
          src="/images/templates/docspace-enterprise/hero/main_picture.svg"
          alt={t("HeroMainPictureAltText")}
        />
      </StyledHeroImgWrapper>
      <StyledHeroWorldwide>
        <StyledHeroWorldwideImgWrapper>
          <img
            src="/images/templates/docspace-enterprise/hero/world_icon.svg"
            alt={t("HeroWorldIconAltText")}
          />
        </StyledHeroWorldwideImgWrapper>
        <Text label={t("TrustedBy")} />
        <Text label={t("CountOfUsers")} />
        <Text label={t("Worldwide")} />
      </StyledHeroWorldwide>
    </StyledHero>
  );
};

export { Hero };
