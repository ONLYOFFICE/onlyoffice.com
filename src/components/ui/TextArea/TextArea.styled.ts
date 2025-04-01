import styled, { css } from "styled-components";
import { ITextArea } from "./TextArea.types";
import { device } from "@src/utils/device";

const StyledTextArea = styled.div<{
  $status: ITextArea["status"];
  $fullWidth: ITextArea["fullWidth"];
  $isFocused: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => (props.$isFocused ? "#666666" : "#aaaaaa")};
  border-radius: 9px;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};
  background-color: ${(props) => (props.$isFocused ? "#ffffff" : "#f9f9f9")};
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: #666666;
  }

  ${(props) =>
    props.$status === "success" &&
    css`
      border-color: #8bb825;
      background-color: #f9feef;
    `}
`;

const StyledTextAreaLabel = styled.label<{
  $isFloating: boolean;
  $status: ITextArea["status"];
}>`
  position: absolute;
  top: ${(props) => (props.$isFloating ? "8px" : "16px")};
  left: 16px;
  font-size: ${(props) => (props.$isFloating ? "12px" : "16px")};
  line-height: 16px;
  color: ${(props) =>
    props.$isFloating
      ? "#666666"
      : props.$status === "success"
      ? "#8BB825"
      : "#AAAAAA"};
  transition: top 0.2s, font-size 0.2s;
  pointer-events: none;
`;

const StyledTextAreaField = styled.textarea<{
  $label: boolean;
  $hasValue: boolean;
}>`
  border: none;
  margin: 16px 0;
  margin-top: ${(props) => (props.$label ? "24px" : "16px")};
  padding: 0 16px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #333333;
  width: 100%;
  background-color: transparent;
  outline: none;
  resize: none;

  &:focus {
    margin-top: ${(props) => (props.$label ? "24px" : "16px")};
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

export { StyledTextArea, StyledTextAreaLabel, StyledTextAreaField };
