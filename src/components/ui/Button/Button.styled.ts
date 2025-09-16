import styled, { css } from "styled-components";
import { IButton } from "./Button.types";
import { device } from "@src/utils/device";

const StyledButton = styled.button<{
  $variant: IButton["variant"];
  $size: IButton["size"];
  $fullWidth: IButton["fullWidth"];
  $borderRadius: IButton["borderRadius"];
  $backgroundColor: IButton["backgroundColor"];
  $textTransform: IButton["textTransform"];
  $fontSize: IButton["fontSize"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.$borderRadius};
  font-size: ${(props) => props.$fontSize || "16px"};
  font-weight: 600;
  line-height: 22px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  min-height: 56px;
  text-align: center;
  text-transform: ${(props) => props.$textTransform};
  cursor: pointer;

  padding: ${(props) => {
    if (props.$size === "small") {
      return props.$variant === "tertiary" || props.$variant === "quinary"
        ? "15px 24px"
        : "16px 24px";
    }

    if (props.$size === "medium") {
      return props.$variant === "tertiary" || props.$variant === "quinary"
        ? "16px 24px"
        : "17px 24px";
    }

    return "16px 24px";
  }};

  ${(props) =>
    props.$variant === "primary"
      ? css`
          border: none;
          color: #ffffff;
          background-color: ${props.$backgroundColor || "#ff6f3d"};

          ${!props.$backgroundColor &&
          css`
            transition: background-color 0.2s;

            &:hover,
            &:active {
              background-color: #ff865c;
            }

            &:disabled {
              background-color: #ffd4c5;
            }
          `}
        `
      : props.$variant === "secondary"
        ? css`
            border: none;
            color: #ffffff;
            background-color: ${props.$backgroundColor || "#444444"};

            ${!props.$backgroundColor &&
            css`
              transition: background-color 0.2s;

              &:hover,
              &:active {
                background-color: #555555;
              }

              &:disabled {
                background-color: #c7c7c7;
              }
            `}
          `
        : props.$variant === "tertiary"
          ? css`
              border: 1px solid #aaaaaa;
              color: #444444;
              background-color: ${props.$backgroundColor || "transparent"};

              ${!props.$backgroundColor &&
              css`
                transition:
                  border-color 0.2s,
                  color 0.2s;

                &:hover,
                &:active {
                  border-color: #ff6f3d;
                  color: #ff6f3d;
                }

                &:disabled {
                  border-color: #e5e5e5;
                  color: #c7c7c7;
                }
              `}
            `
          : props.$variant === "quaternary"
            ? css`
                border: none;
                color: #444444;
                background-color: ${props.$backgroundColor ||
                "rgba(255, 255, 255, 0.9)"};

                ${!props.$backgroundColor &&
                css`
                  transition: background-color 0.2s;

                  &:hover,
                  &:active {
                    background-color: #ffffff;
                  }

                  &:disabled {
                    background-color: #707070;
                  }
                `}
              `
            : props.$variant === "quinary"
              ? css`
                  border: 1px solid #aaaaaa;
                  color: #ffffff;
                  background-color: ${props.$backgroundColor || "transparent"};

                  ${!props.$backgroundColor &&
                  css`
                    transition:
                      border-color 0.2s,
                      color 0.2s;

                    &:hover,
                    &:active {
                      border-color: #ff6f3d;
                      color: #ff6f3d;
                    }

                    &:disabled {
                      border-color: #575757;
                      color: #707070;
                    }
                  `}
                `
              : ""}

  &:disabled {
    opacity: ${(props) => props.$backgroundColor && 0.4};
    pointer-events: none;
    cursor: initial;
  }

  @media ${device.mobile} {
    width: 100%;
    min-height: 48px;

    padding: ${(props) =>
      props.$size === "medium"
        ? props.$variant === "tertiary" || props.$variant === "quinary"
          ? "12px 24px"
          : "13px 24px"
        : "13px 24px"};
  }
`;

export { StyledButton };
