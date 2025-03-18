import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IInput } from "./Input.types";

export const StyledInputWrapper = styled.div<{
  $variant: IInput["variant"];
  $fullWidth: IInput["fullWidth"];
  $hasRightSide?: boolean;
}>`
  background-color: #f9f9f9;
  border: 1px solid;
  border-radius: 9px;
  height: 56px;
  margin: 0 0 32px;
  position: relative;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};

  &:focus {
    border-color: #666666;
    background-color: #ffffff;
    outline: none;
  }
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
    `}
  ${(props) =>
    props.$variant === "default" &&
    css`
      border-color: #aaaaaa;
      background-color: #f9f9f9;
    `}
`;

export const StyledErrorText = styled.div`
  position: relative;
  font-weight: 400;
  color: #cb0000;
  font-size: 13px;
  margin: 6px 0 0 0;
`;

export const StyledToggleButton = styled.button<{
  $type: IInput["type"];
  $id: IInput["id"];
}>`
  background: none;
  background-image: ${(props) => {
    if (props.$type === "password")
      return "url('/images/icons/pass-eye-opened-light.svg')";
    if (props.$type === "text" && props.$id === "password")
      return "url('/images/icons/pass-eye-closed-light.svg')";
    if (props.$type === "text" && props.$id === "search")
      return "url('/images/icons/close-cross.svg')";
    return "none";
  }};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;

  &:hover {
    background-image: ${(props) => {
      if (props.$type === "password")
        return "url('/images/icons/pass-eye-opened.svg')";
      if (props.$type === "text" && props.$id === "password")
        return "url('/images/icons/pass-eye-closed.svg')";
    }};
  }
`;

export const StyledInputLabel = styled.label<{
  $variant: IInput["variant"];
  $isFloating: boolean;
}>`
  position: absolute;
  line-height: 16px;
  left: 16px;
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
`;

export const StyledInput = styled.input<{
  $fullWidth: IInput["fullWidth"];
  $hasRightSide?: boolean;
}>`
  align-items: center;
  background-color: transparent;
  border: none;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 32px;
  height: 32px;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  padding: 0px ${(props) => (props.$hasRightSide ? "48px" : "16px")} 0 16px;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  @media ${device.mobile} {
    font-size: 13px;
    height: 20px;
    line-height: 16px;
    padding: 0px ${(props) => (props.$hasRightSide ? "48px" : "12px")} 0 12px;
    width: 100%;
  }
`;
