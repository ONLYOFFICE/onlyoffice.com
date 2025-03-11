import styled, { css } from "styled-components";
import { IDownloadButton } from "./DownloadButton.types";

export const StyledDownloadButton = styled.a<{
  $variant: IDownloadButton["variant"];
  $platform: IDownloadButton["platform"];
  $icon: IDownloadButton["icon"];
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
  transition: border 0.2s ease, color 0.2s ease, background-color 0.2s ease,
    opacity 0.2s ease, filter 0.2s ease;
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

  ${({ $platform, $icon }) =>
    ["AppStore", "GooglePlay", "SnapStore"].includes($platform) &&
    css`
      background-image: url(${$icon});
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

      ${({ $platform, $icon }) =>
        ["ForWindows", "ForLinux", "ForMacOS"].includes($platform) &&
        css`
          background-image: url(${$icon});
        `}
    }
  }
`;
