import styled from "styled-components";
import { device } from "@src/utils/device";
import { ICheckbox } from "./Checkbox.types";

export const StyledCheckboxWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
  gap: 8px;
  width: fit-content;
`;

export const StyledCheckboxLabel = styled.label`
  color: #666666;
  font-size: 16px;
  line-height: 1.6em;
  background: transparent;
  pointer-events: none;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
`;

export const StyledCheckbox = styled.span<{ $checked: ICheckbox["checked"] }>`
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  border-color: ${(props) => {
    if (props.$checked) return "#8BB825";
    return "#aaaaaa";
  }};
  background-color: ${(props) => {
    if (props.$checked) return "#f9feef";
    return "#f9f9f9";
  }};
  transition: all 0.2s ease-in-out;

  &:before {
    content: ${(props) => (props.$checked ? '""' : "none")};
    display: ${(props) => (props.$checked ? "block" : "none")};
    width: 6px;
    height: 13px;
    border: 0 solid #8bb825;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    margin: 2px 7px;
    pointer-events: none;
  }

  &:hover {
    border-color: ${(props) => (props.$checked ? "#8bb825" : "#666666")};
  }
`;
