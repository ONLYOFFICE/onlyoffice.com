import styled, { css } from "styled-components";
import { ICheckbox } from "./Checkbox.types";
import { device } from "@src/utils/device";

const StyledCheckbox = styled.label<{ $align: ICheckbox["align"], $disabled: ICheckbox["disabled"] }>`
  display: flex;
  align-items: ${(props) => props.$align === "center" && "center"};
  cursor: pointer;
  filter: ${(props) => props.$disabled && "grayscale(100%)"};
`;

const StyledCheckboxInput = styled.input<{ $checked: ICheckbox["checked"] }>`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);

  &:focus + span {
    border-color: ${(props) => (props.$checked ? "#8bb825" : "#666666")};
  }
`;

const StyledCheckboxLabel = styled.span<{ $size: ICheckbox["size"] }>`
  display: inline-flex;
  align-items: center;
  color: #666666;
  ${(props) =>
    props.$size === "small"
      ? css`
          font-size: 14px;
          line-height: 21px;
        `
      : css`
          font-size: 16px;
          line-height: 24px;

          @media ${device.mobile} {
            font-size: 14px;
          }
        `}
`;

const StyledCheckboxIcon = styled.span<{ $checked: ICheckbox["checked"] }>`
  border: 1px solid ${(props) => (props.$checked ? "#8BB825" : "#aaaaaa")};
  border-radius: 3px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-color: ${(props) => (props.$checked ? "#f9feef" : "#f9f9f9")};
  transition: border-color 0.2s;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }

  ${(props) =>
    props.$checked &&
    css`
      &:before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 13px;
        border: 0 solid #8bb825;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
        margin: 2px 7px;
        pointer-events: none;
      }
    `}

  &:hover {
    border-color: ${(props) => (props.$checked ? "#8bb825" : "#666666")};
  }
`;

export {
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
};
