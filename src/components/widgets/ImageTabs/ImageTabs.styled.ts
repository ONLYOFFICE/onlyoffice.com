import styled, { css } from "styled-components";
import { IImageTabs } from "./ImageTabs.types";
import { device } from "@src/utils/device";

const StyledImageTabs = styled.div<{ $position?: IImageTabs["position"] }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$position === "left" ? "352px auto" : "auto 352px"};
  align-items: start;
  column-gap: 32px;

  ul {
    padding: 40px 0;
    order: ${(props) => props.$position === "right" && 2};

    @media ${device.tablet} {
      padding: 0;
      margin: 0 auto;
      width: 100%;
      max-width: 776px;
    }
  }

  @media ${device.tablet} {
    display: block;
    grid-template-columns: initial;
    align-items: initial;
    column-gap: initial;
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 16px;
  font-size: 16px;
  line-height: 26px;
  color: #333333;
  width: 100%;
  background-color: transparent;
  transition: color 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &.active {
    color: #ff6f3d;
    box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

    svg {
      transform: rotate(180deg);

      path {
        fill: #ff6f3d;
      }
    }
  }

  svg {
    min-width: 24px;
    margin-left: 16px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    margin-bottom: 8px;
    width: 100%;
  }
`;

const StyledTabImage = styled.div<{
  $image: string;
  $image2x: string;
  $isDesktop?: boolean;
  $isMobile?: boolean;
}>`
  padding-bottom: 74.265%;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.$isDesktop &&
    css`
      @media ${device.tablet} {
        display: none;
      }
    `}

  ${(props) =>
    props.$isMobile &&
    css`
      display: none;

      @media ${device.tablet} {
        display: block;
        padding-bottom: 74.227%;
      }
    `}

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 120dpi),
    only screen and (min-width: 592px) {
    background-image: ${({ $image, $image2x }) => `url(${$image2x || $image})`};
  }
`;

export { StyledImageTabs, StyledTabButton, StyledTabImage };
