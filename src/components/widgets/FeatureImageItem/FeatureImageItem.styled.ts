import styled, { css } from "styled-components";
import { IFeatureImageItem } from "./FeatureImageItem.types";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledFeatureImageItem = styled.div<{
  $position?: IFeatureImageItem["position"];
}>`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) =>
    props.$position === "left"
      ? "minmax(280px, 448px) minmax(400px, 640px)"
      : "minmax(400px, 640px) minmax(280px, 448px)"};
  column-gap: 32px;
  width: 100%;
  max-width: 1120px;

  @media ${device.tabletS} {
    grid-template-columns: initial;
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyleFeatureImageItemContent = styled.div`
  display: grid;
  row-gap: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureImageItemText = styled(Text)<{ $isTextHtml?: boolean }>`
  ${(props) =>
    props.$isTextHtml &&
    css`
      display: grid;
      gap: 8px;
    `}

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFeatureImageItemLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledFeatureImageItemImgWrapper = styled.div<{
  $position?: IFeatureImageItem["position"];
}>`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${(props) =>
    props.$position === "right" &&
    css`
      order: -1;

      @media ${device.tabletS} {
        order: initial;
      }
    `}
`;

const StyledFeatureImageItemImg = styled.div<{
  $image: IFeatureImageItem["image"]["url"];
  $image2x: IFeatureImageItem["image"]["url2x"];
  $imageHeight: IFeatureImageItem["image"]["height"];
}>`
  padding-bottom: ${(props) =>
    props.$imageHeight
      ? `${((props.$imageHeight / 640) * 100).toFixed(4)}%`
      : "0%"};
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.retina} {
    background-image: ${({ $image, $image2x }) => `url(${$image2x || $image})`};
  }
`;

export {
  StyledFeatureImageItem,
  StyleFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
  StyledFeatureImageItemImgWrapper,
  StyledFeatureImageItemImg,
};
