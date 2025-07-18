import { useTranslation } from "next-i18next";
import { StyledTooltipWrapperText } from "./TooltipWrapper.styled";
import { Tooltip } from "@src/components/ui/Tooltip";

const TooltipWrapper = ({ children }: { children?: React.ReactNode }) => {
  const { t } = useTranslation("download-docs");

  return (
    <Tooltip
      id="access-to-automation-api-tooltip"
      content={t("OODocsDeveloperBannerTooltip")}
      width="280px"
      verticalAlign="middle"
    >
      <StyledTooltipWrapperText>{children}</StyledTooltipWrapperText>
    </Tooltip>
  );
};

export { TooltipWrapper };
