import styled from "styled-components";
import { ITooltip } from "./Tooltip.types";

const StyledTooltipBtn = styled.button<{ $width: ITooltip["width"] }>`
  display: inline-flex;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  + .react-tooltip {
    border-radius: 5px;
    padding: 6px 8px;
    font-size: 13px;
    line-height: 18px;
    color: #ffffff;
    max-width: ${(props) => props.$width};
    text-align: initial;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export { StyledTooltipBtn };
