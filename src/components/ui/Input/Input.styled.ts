import styled, { css } from "styled-components";
import { IInput } from "./Input.types";
import { device } from "@src/utils/device";

const StyledInput = styled.div`
  position: relative;
`;

const StyledInputLabel = styled.label<{
  $labelPosition: IInput["labelPosition"];
  $value: IInput["value"];
  $leftSide: IInput["leftSide"];
  $variant: IInput["variant"];
  $isFocused: boolean;
}>`
  ${(props) =>
    props.$labelPosition === "top"
      ? css`
          display: block;
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 24px;
          color: #333333;

          @media ${device.mobile} {
            font-size: 14px;
            line-height: 20px;
          }
        `
      : css`
          position: absolute;
          top: ${props.$value || props.$isFocused ? "8px" : "16px"};
          left: ${props.$leftSide || props.$variant === "search"
            ? "48px"
            : "16px"};
          font-size: ${props.$value || props.$isFocused ? "12px" : "16px"};
          line-height: ${props.$value || props.$isFocused ? "16px" : "24px"};
          color: ${props.$isFocused ? "#666666" : "#aaaaaa"};
          transition: top 0.2s, font-size 0.2s, color 0.2s;
          pointer-events: none;
          z-index: 1;

          @media ${device.mobile} {
            top: ${props.$value || props.$isFocused ? "6px" : "12px"};
            left: ${props.$leftSide || props.$variant === "search"
              ? "44px"
              : "12px"};
            font-size: ${props.$value || props.$isFocused ? "11px" : "14px"};
            line-height: ${props.$value || props.$isFocused ? "15px" : "24px"};
          }
        `}
`;

const StyledInputIcon = styled.span<{
  $leftSide?: IInput["leftSide"];
  $rightSide?: IInput["rightSide"];
  $variant?: IInput["variant"];
}>`
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);

  ${(props) =>
    props.$leftSide || props.$variant === "search"
      ? css`
          left: 16px;

          @media ${device.mobile} {
            left: 12px;
          }
        `
      : props.$rightSide || props.$variant === "password"
      ? css`
          right: 16px;

          @media ${device.mobile} {
            right: 12px;
          }
        `
      : null}

  ${(props) =>
    props.$variant === "search" &&
    css`
      svg {
        path {
          fill: #808080;
          transition: fill 0.2s;
        }
      }
    `}

    ${(props) =>
    props.$variant === "password"
      ? css`
          cursor: pointer;

          &:not(:disabled):hover {
            svg {
              path {
                fill: #666666;
              }
            }
          }
        `
      : css`
          pointer-events: none;
        `}
`;

const StyledInputFieldWrapper = styled.div`
  position: relative;
`;

const StyledInputField = styled.input<{
  $value: IInput["value"];
  $label: IInput["label"];
  $status: IInput["status"];
  $withClearButton: IInput["withClearButton"];
  $leftSide: IInput["leftSide"];
  $rightSide: IInput["rightSide"];
  $variant: IInput["variant"];
  $labelPosition: IInput["labelPosition"];
  $isFocused: boolean;
}>`
  border: 1px solid;
  border-radius: 9px;
  padding: ${(props) =>
    props.$labelPosition === "default" &&
    props.$label &&
    props.$leftSide &&
    props.$rightSide
      ? "24px 48px 8px"
      : props.$leftSide && props.$rightSide
      ? "16px 48px"
      : props.$labelPosition === "default" && props.$label && props.$leftSide
      ? "24px 16px 8px 48px"
      : props.$labelPosition === "default" && props.$label && props.$rightSide
      ? "24px 48px 8px 16px"
      : props.$labelPosition === "default" && props.$label
      ? "24px 16px 8px"
      : props.$leftSide
      ? "16px 16px 16px 48px"
      : props.$rightSide
      ? "16px 48px 16px 16px"
      : "16px"};
  padding-right: ${(props) =>
    props.$withClearButton && props.$rightSide
      ? "88px"
      : props.$withClearButton ||
        props.$variant === "search" ||
        props.$variant === "password"
      ? "48px"
      : null};
  padding-left: ${(props) => props.$variant === "search" && "48px"};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 56px;
  color: #333333;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s;

  ${(props) =>
    props.$status === "success"
      ? css`
          border-color: #8bb825;
          background-color: #f9feef;
        `
      : props.$status === "error"
      ? css`
          border-color: #cb0000;
          background-color: #fff7f7;

          ~ ${StyledInputLabel} {
            color: #cb0000;
          }
        `
      : css`
          border-color: #aaaaaa;

          &:not(:disabled):hover {
            border-color: #666666;
          }

          ${props.$variant === "search"
            ? css`
                ~ ${StyledInputIcon} {
                  svg {
                    path {
                      fill: ${props.$isFocused && "#444444"};
                    }
                  }
                }

                &:not(:disabled):hover {
                  ~ ${StyledInputIcon} {
                    svg {
                      path {
                        fill: ${props.$variant === "search" && "#444444"};
                      }
                    }
                  }
                }
              `
            : props.$variant === "password"
            ? css`
                ~ ${StyledInputIcon} {
                  svg {
                    path {
                      fill: #aaaaaa;
                      transition: fill 0.2s;
                    }
                  }
                }

                ${props.$isFocused &&
                css`
                  ~ ${StyledInputIcon} {
                    svg {
                      path {
                        fill: #666666;
                      }
                    }
                  }
                `}

                &:not(:disabled):hover {
                  ~ ${StyledInputIcon} {
                    svg {
                      path {
                        fill: #666666;
                      }
                    }
                  }
                }
              `
            : null}
        `}

  ${(props) =>
    props.$isFocused &&
    css`
      border-color: #666666;
      background-color: #ffffff;
    `}

  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #cccccc;

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &:disabled {
    background-color: rgba(249, 249, 249, 0.4);
  }

  @media ${device.mobile} {
    padding: ${(props) =>
      props.$labelPosition === "default" &&
      props.$label &&
      props.$leftSide &&
      props.$rightSide
        ? "22px 44px 6px"
        : props.$leftSide && props.$rightSide
        ? "12px 44px"
        : props.$labelPosition === "default" && props.$label && props.$leftSide
        ? "22px 12px 6px 44px"
        : props.$labelPosition === "default" && props.$label && props.$rightSide
        ? "22px 44px 6px 12px"
        : props.$labelPosition === "default" && props.$label
        ? "22px 12px 6px"
        : props.$leftSide
        ? "12px 12px 12px 44px"
        : props.$rightSide
        ? "12px 44px 12px 12px"
        : "12px"};
    padding-right: ${(props) =>
      props.$withClearButton && props.$rightSide
        ? "84px"
        : props.$withClearButton ||
          props.$variant === "search" ||
          props.$variant === "password"
        ? "44px"
        : null};
    padding-left: ${(props) => props.$variant === "search" && "44px"};
    font-size: 14px;
    line-height: 20px;
    height: 48px;
  }
`;

const StyledInputClearButton = styled.button<{
  $rightSide: IInput["rightSide"];
  $withClearButton: IInput["withClearButton"];
  $variant: IInput["variant"];
}>`
  position: absolute;
  top: 50%;
  right: ${(props) =>
    (props.$rightSide || props.$variant === "password") &&
    props.$withClearButton
      ? "48px"
      : "16px"};
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    path {
      fill: #666666;
    }
  }

  @media ${device.mobile} {
    right: ${(props) =>
      (props.$rightSide || props.$variant === "password") &&
      props.$withClearButton
        ? "44px"
        : "12px"};
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
  StyledInputIcon,
  StyledInputFieldWrapper,
  StyledInputField,
  StyledInputClearButton,
  StyledInputCaption,
};
