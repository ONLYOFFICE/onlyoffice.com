import styled, { css } from "styled-components";
import { IDownloadButton } from "./DownloadButton.types";
import Link from "next/link";

const StyledDownloadButton = styled(Link)<{
  $variant: IDownloadButton["variant"];
  $platform: IDownloadButton["platform"];
  $imageSrc?: string;
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  padding: 11px 15px;
  font-size: 16px;
  line-height: 24px;
  min-width: 170px;
  min-height: 56px;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          border: 1px solid #aaaaaa;
          color: #444444;
          transition:
            filter 0.2s,
            border-color 0.2s;

          &:hover {
            border-color: #ff6f3d;
          }
        `
      : $variant === "secondary"
        ? css`
            color: #ffffff;
            background-color: #444444;
            transition:
              filter 0.2s,
              background-color 0.2s;

            &:hover {
              background-color: #000000;
            }
          `
        : $variant === "tertiary"
          ? css`
              border: 1px solid #aaaaaa;
              color: #ffffff;
              transition:
                filter 0.2s,
                border-color 0.2s;

              &:hover {
                border-color: #ff6f3d;
              }
            `
          : $variant === "quaternary"
            ? css`
                color: #444444;
                background-color: rgba(255, 255, 255, 0.9);
                transition:
                  filter 0.2s,
                  color 0.2s,
                  background-color 0.2s;

                &:hover {
                  color: #000000;
                  background-color: #ffffff;
                }
              `
            : null}

  ${({ $platform, $variant, $imageSrc }) =>
    $platform === "windows"
      ? css`
          &::before {
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 8px;
            width: 32px;
            height: 32px;
            background-image: url("/images/ui/download-button/windows.svg");
          }
        `
      : $platform === "linux"
        ? css`
            &::before {
              content: "";
              display: inline-flex;
              align-items: center;
              margin-right: 8px;
              width: 32px;
              height: 32px;
              background-image: ${$variant === "primary" ||
              $variant === "quaternary"
                ? "url('/images/ui/download-button/linux.svg')"
                : "url('/images/ui/download-button/linux-white.svg')"};
            }
          `
        : $platform === "macos"
          ? css`
              &::before {
                content: "";
                display: inline-flex;
                align-items: center;
                margin-right: 8px;
                width: 32px;
                height: 32px;
                background-image: ${$variant === "primary" ||
                $variant === "quaternary"
                  ? "url('/images/ui/download-button/macos.svg')"
                  : "url('/images/ui/download-button/macos-white.svg')"};
              }
            `
          : $platform === "app-store"
            ? css`
                background-image: ${$imageSrc && `url(${$imageSrc})`};
                background-repeat: no-repeat;
                background-position: center;
                background-size: inherit;
              `
            : $platform === "google-play"
              ? css`
                  background-image: ${$imageSrc && `url(${$imageSrc})`};
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: inherit;
                `
              : $platform === "snap-store"
                ? css`
                    background-image: ${$variant === "primary" ||
                    $variant === "quaternary"
                      ? "url('/images/ui/download-button/snap-store.svg')"
                      : "url('/images/ui/download-button/snap-store-white.svg')"};
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 100% 32px;
                  `
                : null}
`;

export { StyledDownloadButton };
