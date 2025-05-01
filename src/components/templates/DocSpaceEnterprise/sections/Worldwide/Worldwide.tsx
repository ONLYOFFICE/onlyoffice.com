import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { StyledWorldwide, StyledWorldwideImgWrapper } from "./Worldwide.styled";

const Worldwide = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledWorldwide>
      <StyledWorldwideImgWrapper>
        <img
          src="/images/templates/docspace-enterprise/hero/world_icon.svg"
          alt={t("HeroWorldIconAltText")}
        />
      </StyledWorldwideImgWrapper>
      <Text label={t("TrustedBy")} />
      <Heading level={2} label={t("CountOfUsers")} />
      <Text label={t("Worldwide")} />
    </StyledWorldwide>
  );
};

export { Worldwide };
