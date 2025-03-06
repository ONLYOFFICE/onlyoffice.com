import styled, { css } from "styled-components";
import { IDownloadButton } from "./DownloadButton.types";

const platformIcons = {
  light: {
    ForWindows: "/images/icons/windows.svg",
    ForLinux: "/images/icons/linux-white.svg",
    ForMacOS: "/images/icons/macos-white.svg",
    AppStore: "/images/icons/appstore-white.svg",
    GooglePlay: "/images/icons/googleplay-white.svg",
    SnapStore: "/images/icons/snapstore-white.svg",
  },
  dark: {
    ForWindows: "/images/icons/windows.svg",
    ForLinux: "/images/icons/linux-dark.svg",
    ForMacOS: "/images/icons/macos-dark.svg",
    AppStore: "/images/icons/appstore-dark.svg",
    GooglePlay: "/images/icons/googleplay-dark.svg",
    SnapStore: "/images/icons/snapstore-dark.svg",
  },
} as const;

const getTheme = (variant: string) =>
  variant === "primary" || variant === "quaternary" ? "dark" : "light";

export const StyledDownloadButton = styled.a<{
  $variant: IDownloadButton["variant"];
  $platform: IDownloadButton["platform"];
}>`
  width: 170px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 9px;
  padding: 11px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: grayscale(1);
  background-repeat: no-repeat;
  background-position: center;

  ${({ $variant }) =>
    ({
      primary: css`
        background-color: transparent;
        border-color: #ff6f3d;
        color: #444;

        &:hover {
          color: #333;
        }
      `,
      secondary: css`
        background-color: #444;
        color: #fff;

        &:hover {
          background-color: #000;
        }
      `,
      tertiary: css`
        background-color: transparent;
        border-color: #ff6f3d;
        color: #fff;
      `,
      quaternary: css`
        background-color: #fff;
        color: #444;
        opacity: 0.9;

        &:hover {
          color: #333;
          opacity: 1;
        }
      `,
    }[$variant])}

  ${({ $variant, $platform }) =>
    ["AppStore", "GooglePlay", "SnapStore"].includes($platform) &&
    css`
      background-image: url(${platformIcons[getTheme($variant)][$platform]});
    `}

  &:hover {
    filter: grayscale(0);
  }

  span {
    display: ${({ $platform }) =>
      ["AppStore", "GooglePlay", "SnapStore"].includes($platform)
        ? "none"
        : "flex"};
    align-items: center;
    padding-left: 40px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      ${({ $variant, $platform }) =>
        ["ForWindows", "ForLinux", "ForMacOS"].includes($platform) &&
        css`
          background-image: url(${platformIcons[getTheme($variant)][
            $platform
          ]});
        `}
    }
  }
`;
