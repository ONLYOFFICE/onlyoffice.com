import styled, { css } from "styled-components";
import { ICheckbox } from "./Checkbox.types";
import { device } from "@src/utils/device";

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
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

const StyledCheckboxLabel = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #666666;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledCheckboxIcon = styled.span<{ $checked: ICheckbox["checked"] }>`
  border: 1px solid ${(props) => (props.$checked ? "#8BB825" : "#aaaaaa")};
  border-radius: 3px;
  width: 24px;
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
