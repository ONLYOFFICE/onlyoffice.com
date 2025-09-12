import styled, { css, keyframes } from "styled-components";
import { device } from "@src/utils/device";
import { ILoaderButton } from "./LoaderButton.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const loaderAnimation = keyframes`
  100%  { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const StyledLoaderButton = styled.button<{
  $fullWidth: ILoaderButton["fullWidth"];
  $status: ILoaderButton["status"];
  $size: ILoaderButton["size"];
  $variant: ILoaderButton["variant"];
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.04em;
  width: ${(props) => props.$fullWidth && "100%"};
  text-transform: uppercase;
  transition: background-color 0.2s;
  cursor: pointer;

  ${(props) =>
    props.$variant == "secondary" &&
    props.$status === "default" &&
    css`
      font-size: 0;
      background-image: url(${getAssetUrl('/images/icons/arrow-right-white.svg')});
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: center;
    `}

  ${(props) =>
    props.$variant == "tertiary" &&
    props.$status === "default" &&
    css`
      @media ${device.mobile} {
        font-size: 0;
        background-image: url(${getAssetUrl('/images/icons/arrow-right-white.svg')});
        background-repeat: no-repeat;
        background-size: 24px;
        background-position: center;
      }
    `}  

  ${(props) =>
    props.$size === "small" &&
    css`
      padding: 16px;
      min-width: 48px;
      min-height: 48px;
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      padding: 19px 24px;
      min-width: 56px;
      min-height: 56px;
    `}

  ${(props) =>
    props.$status === "default" &&
    css`
      color: #ffffff;
      background-color: #ff6f3d;

      &:hover,
      &:active {
        background-color: #ff865c;
      }
    `}

  ${(props) =>
    props.$status === "loading" &&
    css`
      position: relative;
      color: transparent;
      background-color: #ff6f3d;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 24px;
        height: 24px;
        background-image: url(${getAssetUrl('/images/icons/loader.svg')});
        background-repeat: no-repeat;
        background-size: contain;
        transform: translate(-50%, -50%);
        animation: ${loaderAnimation} 1s infinite linear;
      }
    `}

  ${(props) =>
    props.$status === "success" &&
    css`
      color: transparent;
      background-color: #8bb825;
      background-image: url(${getAssetUrl('/images/icons/check-white.svg')});
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position: center;
    `}

  ${(props) =>
    props.$status === "error" &&
    css`
      color: transparent;
      background-color: #cb0000;
      background-image: url(${getAssetUrl('/images/icons/cross-white.svg')});
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position: center;
    `}

  &:disabled {
    background-color: #ffd4c5;
    cursor: initial;
  }
`;

export { StyledLoaderButton };
