import styled, { css } from "styled-components";
import { IFeatureItem } from "./FeatureItem.types";
import { device } from "@src/utils/device";

const StyledFeatureItem = styled.div<{
  $variant: IFeatureItem["variant"];
  $mobileVariant: IFeatureItem["mobileVariant"];
  $maxWidth: IFeatureItem["maxWidth"];
  $iconWidth: IFeatureItem["icon"]["width"];
  $iconHeight: IFeatureItem["icon"]["height"];
  $iconMobileWidth: IFeatureItem["icon"]["mobileWidth"];
}>`
  position: relative;
  display: grid;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};

  ${(props) =>
    props.$variant === "horizontal"
      ? css`
          grid-template-columns: ${props.$iconWidth} auto;
          column-gap: 24px;
        `
      : props.$variant === "vertical"
      ? css`
          justify-items: center;
          align-content: start;
          row-gap: 16px;
          text-align: center;
        `
      : null}

  @media ${device.mobile} {
    max-width: 100%;

    ${(props) =>
      props.$mobileVariant === "horizontal-icon-top"
        ? css`
            grid-template-columns: initial;
            row-gap: 8px;
          `
        : props.$mobileVariant === "horizontal-icon-left"
        ? css`
            grid-template-columns: ${props.$iconMobileWidth
              ? `${props.$iconMobileWidth} auto`
              : `${props.$iconWidth} auto`};
            justify-items: initial;
            column-gap: 16px;
            text-align: initial;
          `
        : props.$mobileVariant === "horizontal-icon-center"
        ? css`
            grid-template-columns: ${props.$iconMobileWidth
              ? `${props.$iconMobileWidth} auto`
              : `${props.$iconWidth} auto`};
            justify-items: initial;
            align-items: center;
            column-gap: 16px;
            text-align: initial;
          `
        : props.$mobileVariant === "vertical"
        ? css`
            justify-items: center;
            grid-template-columns: initial;
            row-gap: 8px;
            text-align: center;
          `
        : null}
  }
`;

const StyledFeatureItemIcon = styled.div<{
  $iconUrl: IFeatureItem["icon"]["url"];
  $iconWidth: IFeatureItem["icon"]["width"];
  $iconHeight: IFeatureItem["icon"]["height"];
  $iconPositionX: IFeatureItem["icon"]["positionX"];
  $iconPositionY: IFeatureItem["icon"]["positionY"];
  $iconMobileWidth: IFeatureItem["icon"]["mobileWidth"];
  $iconMobileHeight: IFeatureItem["icon"]["mobileHeight"];
  $iconMobilePositionX: IFeatureItem["icon"]["mobilePositionX"];
  $iconMobilePositionY: IFeatureItem["icon"]["mobilePositionY"];
  $iconIsSprite: IFeatureItem["icon"]["isSprite"];
}>`
  width: ${(props) => props.$iconWidth};
  height: ${(props) => props.$iconHeight};
  background-image: url(${(props) => props.$iconUrl});
  background-repeat: no-repeat;
  background-size: ${(props) => !props.$iconIsSprite && "contain"};
  background-position-x: ${(props) => props.$iconPositionX};
  background-position-y: ${(props) => props.$iconPositionY};

  @media ${device.mobile} {
    width: ${(props) => props.$iconMobileWidth};
    height: ${(props) => props.$iconMobileHeight};
    background-position-x: ${(props) => props.$iconMobilePositionX};
    background-position-y: ${(props) => props.$iconMobilePositionY};
    background-size: ${(props) =>
      props.$iconMobileHeight && `auto ${props.$iconMobileHeight}`};
  }
`;

const StyledFeatureItemWrapper = styled.div`
  display: grid;
  align-content: start;
  row-gap: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

export { StyledFeatureItem, StyledFeatureItemIcon, StyledFeatureItemWrapper };
