import { useTranslation } from "next-i18next";
import {
  StyledFitWrapper,
  StyledFitText,
  StyledFitTitle,
  StyledConnectorsWrapper,
  StyledConnector,
} from "./Fit.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Fit = () => {
  const { t } = useTranslation("office-for-educators");

  return (
    <StyledFitWrapper>
      <StyledFitTitle level={3}>{t("FitToAnyLMSOrDMS")}</StyledFitTitle>
      <StyledFitText>{t("FitToAnyLMSOrDMSDesc")}</StyledFitText>

      <StyledConnectorsWrapper>
        {items.map((item, index) => (
          <StyledConnector
            key={index}
            href={item.href}
            $desktopWidth={item.desktopWidth}
            $mobileWidth={item.mobileWidth}
            $desktopPositionX={item.desktopPositionX}
            $mobilePositionX={item.mobilePositionX}
          />
        ))}
      </StyledConnectorsWrapper>
      <Link
        href="/all-connectors"
        label={t("ExploreAllIntegrations")}
        color="main"
        textUnderline
        hover="underline-none"
      />
    </StyledFitWrapper>
  );
};

export { Fit };
