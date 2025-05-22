import { Section } from "@src/components/ui/Section";

import {
  StyledCollabWrapper,
  StyledCollabLeft,
  StyledCollabHeading,
  StyledCollabRight,
  StyledCollabText,
} from "./Collab.styled";
import { useTranslation } from "next-i18next";

const Collab = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <Section
      desktopSpacing={["88px", "0"]}
      tabletSpacing={["112px", "0"]}
      tabletSmallSpacing={["112px", "0"]}
      mobileSpacing={["48px", "0"]}
      background="#f5f5f5"
    >
      <StyledCollabWrapper>
        <StyledCollabLeft>
          <StyledCollabHeading
            level={2}
            size={3}
            label={t("RealTimeCollaboration")}
          />
          <StyledCollabText size={1} label={t("BeMoreProductive")} />
        </StyledCollabLeft>
        <StyledCollabRight $backgroundUrl={t("CollabBackgroundUrl")} $backgroundUrl2x={t("CollabBackgroundUrl2x")} />
      </StyledCollabWrapper>
    </Section>
  );
};

export { Collab };
