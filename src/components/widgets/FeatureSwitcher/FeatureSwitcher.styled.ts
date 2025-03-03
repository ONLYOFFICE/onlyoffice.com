import styled, { css } from "styled-components";
import { IFeatureSwitcher } from "./FeatureSwitcher.types";
import { device } from "@src/utils/device";

const StyledFeatureSwitcher = styled.div<{
  $position?: IFeatureSwitcher["position"];
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$position === "left" ? "352px auto" : "auto 352px"};
  align-items: center;
  column-gap: 32px;

  ul {
    padding: 40px 0;
    order: ${(props) => props.$position === "right" && 2};

    @media ${device.tablet} {
      padding: 0;
    }
  }

  @media ${device.tablet} {
    display: block;
    grid-template-columns: initial;
    align-items: initial;
    column-gap: initial;
  }
`;

const StyledFeatureSwitcherBtn = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 16px;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#333333")};
  width: 100%;
  background-color: transparent;
  transition: color 0.2s, box-shadow 0.2s;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

      svg {
        transform: rotate(180deg);

        path {
          fill: #ff6f3d;
        }
      }
    `}

  svg {
    min-width: 24px;
    margin-left: 16px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    width: 100%;
  }
`;

const StyledFeatureSwitcherImage = styled.div<{
  $imageWidth?: IFeatureSwitcher["imageWidth"];
  $imageHeight?: IFeatureSwitcher["imageHeight"];
  $image: string;
  $image2x: string;
  $isDesktop?: boolean;
  $isMobile?: boolean;
}>`
  padding-bottom: ${(props) =>
    props.$imageHeight && props.$imageWidth
      ? ((props.$imageHeight / props.$imageWidth) * 100).toFixed(4) + "%"
      : "0%"};
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
      }
    `}

  @media ${device.retina} {
    background-image: ${({ $image, $image2x }) => `url(${$image2x || $image})`};
  }

  @media ${device.tablet} {
    margin: 8px 0;
  }
`;

export {
  StyledFeatureSwitcher,
  StyledFeatureSwitcherBtn,
  StyledFeatureSwitcherImage,
};
