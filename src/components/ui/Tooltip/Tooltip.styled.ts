import styled, { css } from "styled-components";
import { ITooltip } from "./Tooltip.types";

const StyledTooltipBtn = styled.div<{
  $width: ITooltip["width"];
  $infoIcon?: ITooltip["infoIcon"];
  $verticalAlign?: ITooltip["verticalAlign"];
}>`
  display: inline-flex;
  border: none;
  padding: 0;
  background-color: transparent;
  vertical-align: ${(props) => props.$verticalAlign};
  cursor: pointer;

  ${(props) =>
    props.$infoIcon &&
    css`
      opacity: 0.3;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    `}

  + .react-tooltip {
    border-radius: 5px;
    padding: 6px 8px;
    font-size: 13px;
    line-height: 18px;
    color: #ffffff;
    max-width: ${(props) => props.$width};
    text-align: initial;
    background-color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
    z-index: 10;
  }
`;

export { StyledTooltipBtn };
