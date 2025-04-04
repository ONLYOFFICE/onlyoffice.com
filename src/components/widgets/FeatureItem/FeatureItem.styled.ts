import styled, { css } from "styled-components";
import { IFeatureItem } from "./FeatureItem.types";
import { device } from "@src/utils/device";

const StyledFeatureItem = styled.div<{
  $variant: IFeatureItem["variant"];
  $icon: IFeatureItem["icon"]["url"];
  $iconPositionX: IFeatureItem["icon"]["positionX"];
  $iconPositionY: IFeatureItem["icon"]["positionY"];
}>`
  position: relative;
  display: grid;
  align-content: start;
  gap: 8px;
  width: 100%;
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
    background-image: url(${({ $icon }) => $icon});
    background-repeat: no-repeat;
    background-position: ${({
      $iconPositionX = "0px",
      $iconPositionY = "center",
    }) => `${$iconPositionX} ${$iconPositionY}`};

    ${(props) =>
      props.$variant === "horizontal"
        ? css`
            left: 0;
          `
        : css`
            left: 50%;
            transform: translateX(-50%);
          `}
  }

  @media ${device.mobile} {
    padding: 80px 0 0 0;
  }
`;

export { StyledFeatureItem };
