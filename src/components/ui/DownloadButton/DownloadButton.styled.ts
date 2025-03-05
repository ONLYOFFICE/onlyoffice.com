import styled, { css } from "styled-components";
import { ButtonVariant, Platform } from "./DownloadButton.types";

const platformIcons = {
  light: {
    ForWindows: "images/icons/windows.svg",
    ForLinux: "images/icons/linux-white.svg",
    ForMacOS: "images/icons/macos-white.svg",
    AppStore: "images/icons/appstore-white.svg",
    GooglePlay: "images/icons/googleplay-white.svg",
    SnapStore: "images/icons/snapstore-white.svg",
  },
  dark: {
    ForWindows: "images/icons/windows.svg",
    ForLinux: "images/icons/linux-dark.svg",
    ForMacOS: "images/icons/macos-dark.svg",
    AppStore: "images/icons/appstore-dark.svg",
    GooglePlay: "images/icons/googleplay-dark.svg",
    SnapStore: "images/icons/snapstore-dark.svg",
  },
} as const;

const platformStyles: Record<
  Platform,
  { padding: string; bgPosition: string; bgSize?: string }
> = {
  ForWindows: { padding: "15px 15px 15px 55px", bgPosition: "16px" },
  ForMacOS: { padding: "15px 21px 15px 61px", bgPosition: "21px" },
  ForLinux: { padding: "15px 29px 15px 69px", bgPosition: "29px" },
  AppStore: { padding: "11px", bgPosition: "center", bgSize: "initial" },
  GooglePlay: { padding: "11px", bgPosition: "center", bgSize: "initial" },
  SnapStore: { padding: "11px", bgPosition: "center", bgSize: "initial" },
};

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  "outline-light-text": css`
    border: 1px solid #ff6f3d;
    background-color: transparent;
    color: #ff6f3d;
  `,
  dark: css`
    background-color: #444444;
    color: #ffffff;
    &:hover {
      background-color: #000000;
    }
  `,
  "outline-dark-text": css`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #ff6f3d;
  `,
  light: css`
    background-color: #ffffff;
    border: none;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  `,
};

const getPlatformStyles = (platform: Platform, variant: ButtonVariant) => {
  const { padding, bgPosition, bgSize } = platformStyles[platform];
  const backgroundImage =
    variant === "dark" || variant === "outline-dark-text"
      ? platformIcons.light[platform]
      : platformIcons.dark[platform];

  return css`
    padding: ${padding};
    background-position-x: ${bgPosition};
    background-image: url(${backgroundImage});
    ${bgSize ? `background-size: ${bgSize};` : "background-size: 32px;"}
  `;
};

export const ButtonStyled = styled.a<{
  variant: ButtonVariant;
  platform: Platform;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 56px;
  font-size: 16px;
  border-radius: 9px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background-repeat: no-repeat;
  background-position-y: center;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }

  ${({ variant }) => variantStyles[variant]};
  ${({ platform, variant }) => getPlatformStyles(platform, variant)};
`;
