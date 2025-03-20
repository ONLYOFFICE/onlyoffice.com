import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { ITextArea } from "./TextArea.types";

export const StyledTextAreaWrapper = styled.div<{
  $variant: ITextArea["variant"];
  $fullWidth: ITextArea["fullWidth"];
  $isFocused: boolean;
}>`
  border: 1px solid;
  border-radius: 9px;
  border-color: ${(props) => (props.$isFocused ? "#666666" : "#aaaaaa")};
  background-color:  ${(props) => (props.$isFocused ? "#ffffff" : "#f9f9f9")};
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
`;

export const StyledTextAreaLabel = styled.label<{
  $isFloating: boolean;
  $variant: ITextArea["variant"];
}>`
  position: absolute;
  line-height: 16px;
  left: 16px;
  color: ${(props) => {
    if (props.$isFloating) return "#666666";
    if (props.$variant === "success") return "#8BB825";
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

export const StyledTextArea = styled.textarea<{
  $fullWidth: ITextArea["fullWidth"];
  $label: boolean;
  $hasValue: boolean;
}>`
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 32px;
  background-color: transparent;
  border: 0;
  border-color: transparent;
  line-height: 22px;
  outline: none;
  margin-top: ${(props) => (props.$hasValue && props.$label ? "24px" : props.$hasValue && !props.$label ? "16px" : "0")};
  padding: ${(props) => (props.$label ? (props.$hasValue ? "0px 16px 0" : "24px 16px 0") : (props.$hasValue ? "0px 16px 0" : "16px 16px 0"))};
  resize: none;
  width: ${(props) => props.$fullWidth && "100%"};

  &:focus {
    margin-top: ${(props) => (props.$label ? "24px" : "16px")};
    padding-top: 0px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
