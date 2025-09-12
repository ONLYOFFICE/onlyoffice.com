import styled from "styled-components";
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
  border: 1px solid
    ${(props) =>
      props.$isFocused
        ? "#666666"
        : props.$status === "success"
          ? "#8bb825"
          : "#aaaaaa"};
  border-radius: 6px;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};
  background-color: ${(props) =>
    props.$isFocused
      ? "#ffffff"
      : props.$status === "success"
        ? "#f9feef"
        : "#f9f9f9"};
  transition:
    border-color 0.2s,
    background-color 0.2s;

  &:hover {
    border-color: #666666;
  }
`;

const StyledTextAreaLabel = styled.label<{
  $isFloating: boolean;
  $status: ITextArea["status"];
}>`
  position: absolute;
  top: ${(props) => (props.$isFloating ? "8px" : "16px")};
  left: 16px;
  font-size: ${(props) => (props.$isFloating ? "12px" : "16px")};
  line-height: ${(props) => (props.$isFloating ? "16px" : "22px")};
  color: ${(props) =>
    props.$isFloating
      ? "#666666"
      : props.$status === "success"
        ? "#8BB825"
        : "#AAAAAA"};
  transition:
    top 0.2s,
    font-size 0.2s;
  pointer-events: none;

  @media ${device.mobile} {
    top: ${(props) => (props.$isFloating ? "6px" : "12px")};
    left: 12px;
    font-size: ${(props) => (props.$isFloating ? "11px" : "14px")};
    line-height: ${(props) => (props.$isFloating ? "15px" : "20px")};
  }
`;

const StyledTextAreaField = styled.textarea<{
  $label: boolean;
  $hasValue: boolean;
}>`
  border: none;
  margin: 16px 0;
  margin-top: ${(props) => props.$label && "24px"};
  padding: 0 16px;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  width: 100%;
  background-color: transparent;
  outline: none;
  resize: none;

  &:focus {
    margin-top: ${(props) => props.$label && "24px"};

    @media ${device.mobile} {
      margin-top: ${(props) => props.$label && "22px"};
    }
  }

  @media ${device.mobile} {
    margin: 12px 0;
    margin-top: ${(props) => props.$label && "22px"};
    padding: 0 12px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export { StyledTextArea, StyledTextAreaLabel, StyledTextAreaField };
