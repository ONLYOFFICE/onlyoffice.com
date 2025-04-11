import styled, { css } from "styled-components";
import { IButton } from "./Button.types";
import { device } from "@src/utils/device";

const StyledButton = styled.button<{
  $variant: IButton["variant"];
  $size: IButton["size"];
  $fullWidth: IButton["fullWidth"];
  $borderRadius: IButton["borderRadius"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.$borderRadius};
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.04em;
  width: ${(props) => props.$fullWidth && "100%"};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) =>
    props.$size === "small" &&
    css`
      padding: 16px 24px;
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      padding: ${props.$variant === "tertiary" || props.$variant === "quinary"
        ? "18px 24px"
        : "19px 24px"};

      @media ${device.mobile} {
        padding: ${props.$variant === "tertiary" || props.$variant === "quinary"
          ? "15px 24px"
          : "16px 24px"};
      }
    `}

  ${(props) =>
    props.$variant === "primary" &&
    css`
      border: none;
      color: #ffffff;
      background-color: #ff6f3d;
      transition: background-color 0.2s;

      &:hover,
      &:active {
        background-color: #ff865c;
      }

      &:disabled {
        background-color: #ffd4c5;
      }
    `}

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      border: none;
      color: #ffffff;
      background-color: #444444;
      transition: background-color 0.2s;

      &:hover,
      &:active {
        background-color: #555555;
      }

      &:disabled {
        background-color: #c7c7c7;
      }
    `}

  ${(props) =>
    props.$variant === "tertiary" &&
    css`
      border: 1px solid #aaaaaa;
      color: #444444;
      background-color: transparent;
      transition: border-color 0.2s, color 0.2s;

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

  ${(props) =>
    props.$variant === "quaternary" &&
    css`
      border: none;
      color: #444444;
      background-color: rgba(255, 255, 255, 0.9);
      transition: background-color 0.2s;

      &:hover,
      &:active {
        background-color: #ffffff;
      }

      &:disabled {
        background-color: #707070;
      }
    `}

  ${(props) =>
    props.$variant === "quinary" &&
    css`
      border: 1px solid #aaaaaa;
      color: #ffffff;
      background-color: transparent;
      transition: border-color 0.2s, color 0.2s;

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

  &:disabled {
    pointer-events: none;
    cursor: initial;
  }

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
    width: 100%;
    min-height: 48px;
  }
`;

export { StyledButton };
