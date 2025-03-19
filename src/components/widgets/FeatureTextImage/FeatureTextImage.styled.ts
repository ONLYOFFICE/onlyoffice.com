import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IFeatureTextImage } from "./FeatureTextImage.types";

const StyledFeatureImageContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media ${device.tablet} {
    order: 0;
  }

  @media ${device.mobile} {
    row-gap: 8px;
    order: 0;
  }
`;

const StyledFeatureImageWrapper = styled.div`
  max-width: 1120px;
  display: grid;
  grid-template-columns: 448px auto;
  column-gap: 32px;
  align-items: center;

  &:nth-child(even) {
    grid-template-columns: auto 448px;

    ${StyledFeatureImageContent} {
      order: 2;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      gap: 24px;

      ${StyledFeatureImageContent} {
        order: 0;
      }
    }

    @media ${device.mobile} {
      gap: 16px;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledFeatureImageText = styled(Text)`
  color: #666;
  line-height: 1.5em;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFeatureImage = styled.div<{
  $imageWidth: IFeatureTextImage["imageWidth"];
  $imageHeight: IFeatureTextImage["imageHeight"];
  $image: IFeatureTextImage["image"]["url"];
  $image2x: IFeatureTextImage["image"]["url2x"];
}>`
  padding-bottom: ${({ $imageHeight, $imageWidth }) =>
    $imageHeight && $imageWidth
      ? (($imageHeight / $imageWidth) * 100).toFixed(4) + "%"
      : "0%"};
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.retina} {
    background-image: ${({ $image, $image2x }) => `url(${$image2x || $image})`};
  }
`;

export {
  StyledFeatureImageWrapper,
  StyledFeatureImageContent,
  StyledFeatureImageText,
  StyledFeatureImage,
};
