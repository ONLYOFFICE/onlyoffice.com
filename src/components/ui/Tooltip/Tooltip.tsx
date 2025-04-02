import { StyledTooltipBtn } from "./Tooltip.styled";
import { ITooltip } from "./Tooltip.types";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltip = ({
  id,
  className,
  content,
  children,
  float,
  offset,
  place = "bottom",
  width = "200px",
}: ITooltip) => {
  return (
    <>
      <StyledTooltipBtn
        className={className}
        data-tooltip-id={id}
        $width={width}
      >
        {children}
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
