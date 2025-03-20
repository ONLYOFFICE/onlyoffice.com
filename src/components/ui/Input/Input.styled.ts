import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IInput } from "./Input.types";

export const StyledInputWrapper = styled.div<{
  $variant: IInput["variant"];
  $fullWidth: IInput["fullWidth"];
  $isFocused: boolean;
}>`
  background-color: ${(props) => (props.$isFocused ? "#ffffff" : "#f9f9f9")};
  border: 1px solid;
  border-color: ${(props) => (props.$isFocused ? "#666666" : "#aaaaaa")};
  border-radius: 9px;
  height: 56px;
  outline: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};

  &:hover {
    border-color: #666666;
  }

  ${(props) =>
    props.$variant === "success" &&
    css`
      border-color: #8bb825;
      background-color: #f9feef;
    `}
  ${(props) =>
    props.$variant === "error" &&
    css`
      border-color: #cb0000;
      background-color: #fff7f7;
      margin: 0 0 32px;
    `}

  @media ${device.mobile} {
    height: 48px;
  }
`;

export const StyledErrorText = styled.div`
  position: relative;
  font-weight: 400;
  color: #cb0000;
  font-size: 13px;
  margin: 8px 0 0 0;
  @media ${device.mobile} {
    font-size: 12px;
    margin: 4px 0 0 0;
  }
`;

export const StyledToggleButton = styled.button<{
  $type: IInput["type"];
  $clearable?: IInput["clearable"];
  $leftSide?: boolean;
}>`
  background: none;
  background-image: ${(props) => {
    if (props.$type === "password")
      return "url('/images/icons/pass-eye-opened-light.svg')";
    if (props.$type === "text")
      return "url('/images/icons/pass-eye-closed-light.svg')";
    if (props.$clearable)
      return "url('/images/icons/close-cross.svg')";
    if (props.$leftSide)
      return "url('/images/icons/search-light.svg')";
  }};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  height: ${(props) => (props.$type === "search" ? "24px" : "20px")};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.$type === "search" ? "24px" : "20px")};

  ${(props) =>
    props.$leftSide &&
    css`
      left: 16px;
    `}

  &:hover {
    background-image: ${(props) => {
      if (props.$type === "password")
        return "url('/images/icons/pass-eye-opened.svg')";
      if (props.$type === "text")
        return "url('/images/icons/pass-eye-closed.svg')";
      if (props.$leftSide)
        return "url('/images/icons/search.svg')";
    }};
  }
`;

export const StyledInputLabel = styled.label<{
  $variant: IInput["variant"];
  $isFloating: boolean;
  $leftSide?: boolean;
}>`
  position: absolute;
  line-height: 16px;
  left: ${(props) => (props.$leftSide ? "48px" : "16px")};
  color: ${(props) => {
    if (props.$isFloating) return "#666666";
    if (props.$variant === "error") return "#EA9494";
    return "#AAAAAA";
  }};
  transition: all 0.2s ease-in-out;
  background: transparent;
  pointer-events: none;
  transform: ${(props) =>
    props.$isFloating ? "translateX(0) translateY(-13px)" : "translate(0, 0)"};
  font-size: ${(props) => (props.$isFloating ? "12px" : "16px")};
  top: 18px;

  @media ${device.mobile} {
    line-height: 15px;
    left: ${(props) => (props.$leftSide ? "48px" : "12px")};
    font-size: ${(props) => (props.$isFloating ? "11px" : "14px")};
    top: 15px;
  }
`;

export const StyledInput = styled.input<{
  $fullWidth: IInput["fullWidth"];
  $hasRightSide: IInput["hasRightSide"];
  type: IInput["type"];
  $hasLeftSide: boolean;
  $label: boolean;
}>`
  align-items: center;
  background-color: transparent;
  border: none;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: ${(props) => (props.$label ? "34px" : "24px")};
  justify-content: center;
  margin: 0px;
  outline: none;
  padding: ${(props) => (props.$label ? "20px" : "16px")}
    ${(props) => (props.$hasRightSide ? "48px" : "16px")}
    ${(props) => (props.$label ? "0px" : "16px")} 
    ${(props) => (props.$hasLeftSide ? "48px" : "16px")};
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:-webkit-autofill {
    background-color: transparent;
    border-radius: 9px;
    color: #333333;
    box-shadow: 0 0 0px 1000px white inset;
  }

  ${(props) => props.type === "search" && `
    &::-webkit-search-cancel-button {
      display: none;
    }
  `}

  @media ${device.mobile} {
    font-size: 13px;
    height: 46px;
    line-height: 20px;
    padding: ${(props) => (props.$label ? "10px" : "16px")} ${(props) => (props.$hasRightSide ? "48px" : "12px")}  ${(props) => (props.$label ? "0px" : "16px")} ${(props) => (props.$hasLeftSide ? "48px" : "12px")};
    width: 100%;
  }
`;
