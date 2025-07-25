import { StyledTooltipBtn } from "./Tooltip.styled";
import { ITooltip } from "./Tooltip.types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { InfoIcon } from "@src/components/icons";

const Tooltip = ({
  id,
  className,
  content,
  children,
  tabIndex = 0,
  infoIcon,
  float,
  offset,
  place = "bottom",
  width = "200px",
  verticalAlign,
}: ITooltip) => {
  return (
    <>
      <StyledTooltipBtn
        className={className}
        data-tooltip-id={id}
        data-tooltip-content={content}
        $width={width}
        $infoIcon={infoIcon}
        $verticalAlign={verticalAlign}
        tabIndex={tabIndex}
        role="button"
      >
        {infoIcon ? <InfoIcon /> : children}
      </StyledTooltipBtn>

      <ReactTooltip
        id={id}
        noArrow
        float={float}
        place={place}
        offset={offset}
        content={content}
      ></ReactTooltip>
    </>
  );
};

export { Tooltip };
