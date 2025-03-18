import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { ITextArea } from "./TextArea.types";

export const StyledTextAreaWrapper = styled.div<{
  $variant: ITextArea["variant"];
  $fullWidth: ITextArea["fullWidth"];
}>`
  border: 1px solid;
  border-radius: 9px;
  border-color: #aaaaaa;
  background-color: #f9f9f9;
  margin: 0 0 32px;
  padding: 27px 16px 8px 16px;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};

  &:hover {
    border-color: #666666;
  }
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
  padding: 0;
  resize: none;
  width: ${(props) => props.$fullWidth && "100%"};

  @media ${device.mobile} {
    padding: 14px 12px;
    width: 100%;
  }
`;
