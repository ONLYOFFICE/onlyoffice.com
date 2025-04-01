import styled, { css } from "styled-components";
import { IInput } from "./Input.types";

const StyledInput = styled.div`
  position: relative;
`;

const StyledInputLabel = styled.label<{
  $value: IInput["value"];
  $leftSide: IInput["leftSide"];
  $variant: IInput["variant"];
  $isFocused: boolean;
}>`
  position: absolute;
  top: ${(props) => (props.$value || props.$isFocused ? "8px" : "16px")};
  left: ${(props) =>
    props.$leftSide || props.$variant === "search" ? "48px" : "16px"};
  font-size: ${(props) => (props.$value || props.$isFocused ? "12px" : "16px")};
  line-height: 24px;
  color: ${(props) => (props.$isFocused ? "#666666" : "#aaaaaa")};
  transition: top 0.2s, font-size 0.2s, color 0.2s;
  pointer-events: none;
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
        `
      : props.$rightSide || props.$variant === "password"
      ? css`
          right: 16px;
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

const StyledInputField = styled.input<{
  $value: IInput["value"];
  $label: IInput["label"];
  $status: IInput["status"];
  $withClearButton: IInput["withClearButton"];
  $leftSide: IInput["leftSide"];
  $rightSide: IInput["rightSide"];
  $variant: IInput["variant"];
  $isFocused: boolean;
}>`
  border: 1px solid;
  border-radius: 9px;
  padding: ${(props) =>
    props.$label && props.$leftSide && props.$rightSide
      ? "24px 48px 8px"
      : props.$leftSide && props.$rightSide
      ? "16px 48px"
      : props.$label && props.$leftSide
      ? "24px 16px 8px 48px"
      : props.$label && props.$rightSide
      ? "24px 48px 8px 16px"
      : props.$label
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
    color: #cccccc;
  }

  &:disabled {
    background-color: rgba(249, 249, 249, 0.4);
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
`;

const StyledInputCaption = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
  color: #cb0000;
`;

export {
  StyledInput,
  StyledInputLabel,
  StyledInputIcon,
  StyledInputField,
  StyledInputClearButton,
  StyledInputCaption,
};
