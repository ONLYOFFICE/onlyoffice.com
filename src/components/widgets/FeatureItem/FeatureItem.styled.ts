import styled, { css } from "styled-components";
import { IFeatureItem } from "./FeatureItem.types";
import { device } from "@src/utils/device";

const StyledFeatureItem = styled.div<{
  $variant: IFeatureItem["variant"];
  $icon: IFeatureItem["icon"]["url"];
  $iconPositionX: IFeatureItem["icon"]["positionX"];
  $iconPositionY: IFeatureItem["icon"]["positionY"];
  $iconMobilePositionX: IFeatureItem["icon"]["mobilePositionX"];
  $iconMobileHorizontalVariant: IFeatureItem["icon"]["mobileHorizontalVariant"];
}>`
  position: relative;
  display: grid;
  align-content: start;
  gap: 12px;

  ${(props) =>
    props.$variant === "horizontal"
      ? css`
          padding-left: 88px;
        `
      : css`
          padding-top: 80px;
          max-width: 352px;
          text-align: center;
        `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 64px;
    height: 64px;
    background-image: url(${(props) => props.$icon});
    background-repeat: no-repeat;

    ${(props) =>
      props.$variant === "horizontal"
        ? css`
            left: 0;
          `
        : css`
            left: 50%;
            transform: translateX(-50%);
          `}

    ${(props) =>
      props.$iconPositionX &&
      css`
        background-position-x: ${props.$iconPositionX};
      `}

    ${(props) =>
      props.$iconPositionY &&
      css`
        background-position-y: ${props.$iconPositionY};
      `}

    ${(props) =>
      props.$iconMobilePositionX &&
      css`
        @media ${device.mobile} {
          width: 48px;
          height: 48px;
          background-position-x: ${props.$iconMobilePositionX};
          background-size: auto 48px;
        }
      `}
  }

  @media ${device.mobile} {
    ${(props) =>
      props.$iconMobileHorizontalVariant
        ? css`
            padding: 0 0 0 64px;
          `
        : css`
            padding: 80px 0 0 0;
          `}
  }
`;

export { StyledFeatureItem };
