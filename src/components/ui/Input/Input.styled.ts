import styled, { css } from "styled-components";
import { IInput } from "./Input.types";
import { device } from "@src/utils/device";

const StyledInput = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputLabel = styled.label<{
  $value: IInput["value"];
  $leftSide: IInput["leftSide"];
  $disabled: IInput["disabled"];
  $active: IInput["active"];
  $status: IInput["status"];
  $isFocused: boolean;
}>`
  position: absolute;
  top: ${(props) =>
    props.$value || props.$isFocused || props.$active ? "7px" : "15px"};
  left: ${(props) => (props.$leftSide ? "8px" : "16px")};
  font-size: ${(props) =>
    props.$value || props.$isFocused || props.$active ? "12px" : "16px"};
  line-height: ${(props) =>
    props.$value || props.$isFocused || props.$active ? "16px" : "24px"};
  color: ${(props) =>
    props.$isFocused
      ? "#666666"
      : props.$disabled
        ? "#cccccc"
        : props.$status === "success"
          ? "#8bb825"
          : props.$status === "error"
            ? "#cb0000"
            : "#aaaaaa"};
  transition:
    top 0.2s,
    font-size 0.2s,
    color 0.2s;
  pointer-events: none;
  z-index: 1;

  @media ${device.mobile} {
    top: ${(props) =>
      props.$value || props.$isFocused || props.$active ? "6px" : "11px"};
    left: ${(props) => (props.$leftSide ? "8px" : "12px")};
    font-size: ${(props) =>
      props.$value || props.$isFocused || props.$active ? "11px" : "14px"};
    line-height: ${(props) =>
      props.$value || props.$isFocused || props.$active ? "15px" : "24px"};
  }
`;

const StyledInputWrapper = styled.div<{
  $status: IInput["status"];
  $disabled: IInput["disabled"];
  $isFocused: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.$status === "success"
      ? "#8bb825"
      : props.$status === "error"
        ? "#cb0000"
        : "#aaaaaa"};
  border-radius: 3px;
  width: 100%;
  height: 56px;
  background-color: ${(props) =>
    props.$status === "success"
      ? "#f9feef"
      : props.$status === "error"
        ? "#fff7f7"
        : props.$disabled
          ? " rgba(249, 249, 249, 0.4)"
          : "#f9f9f9"};
  transition:
    border-color 0.2s,
    background-color 0.2s;
  overflow: hidden;

  ${(props) =>
    props.$status === "error" &&
    css`
      ~ ${StyledInputLabel} {
        color: #cb0000;
      }
    `}

  ${(props) =>
    props.$isFocused &&
    css`
      border-color: #666666;
      background-color: #ffffff;
    `}

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
    `}

  ${(props) =>
    !props.$disabled &&
    !(props.$status === "success" || props.$status === "error") &&
    css`
      &:hover {
        border-color: #666666;
      }
    `}

  @media ${device.mobile} {
    height: 48px;
  }
`;

const StyledInputBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledInputField = styled.input<{
  $isFocused: boolean;
  $label: IInput["label"];
  $leftSide: IInput["leftSide"];
  $rightSide: IInput["rightSide"];
}>`
  border: none;
  border-radius: inherit;
  padding: ${(props) =>
    props.$label && props.$leftSide && props.$rightSide
      ? "24px 8px 8px"
      : props.$label && props.$leftSide
        ? "24px 16px 8px 8px"
        : props.$label && props.$rightSide
          ? "24px 8px 8px 16px"
          : props.$label
            ? "24px 16px 8px"
            : props.$leftSide && props.$rightSide
              ? "16px 8px"
              : props.$leftSide
                ? "16px 16px 16px 8px"
                : props.$rightSide
                  ? "16px 8px 16px 16px"
                  : "16px"};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 100%;
  color: #333333;
  outline: none;
  background: transparent;

  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #cccccc;

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media ${device.mobile} {
    padding: ${(props) =>
      props.$label && props.$leftSide && props.$rightSide
        ? "22px 8px 6px"
        : props.$label && props.$leftSide
          ? "22px 12px 6px 8px"
          : props.$label && props.$rightSide
            ? "22px 8px 6px 12px"
            : props.$label
              ? "22px 12px 6px"
              : props.$leftSide && props.$rightSide
                ? "12px 8px"
                : props.$leftSide
                  ? "12px 12px 12px 8px"
                  : props.$rightSide
                    ? "12px 8px 12px 12px"
                    : "12px"};
    font-size: 14px;
    line-height: 20px;
  }
`;

const StyledInputCaption = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
  color: #cb0000;

  @media ${device.mobile} {
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export {
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
  StyledInputBody,
  StyledInputField,
  StyledInputCaption,
};
