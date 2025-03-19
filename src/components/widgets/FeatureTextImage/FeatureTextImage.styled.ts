import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IFeatureTextImage } from "./FeatureTextImage.types";

const StyledFeatureImageContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureImageWrapper = styled.div<{
  $position?: IFeatureTextImage["position"];
}>`
  max-width: 1120px;
  display: grid;
  grid-template-columns: ${({ $position }) =>
    $position === "left" ? "448px auto" : "auto 448px"};
  column-gap: 32px;
  align-items: center;

  ${StyledFeatureImageContent} {
    order: ${({ $position }) => ($position === "left" ? 0 : 2)};
  }

  &:nth-child(even) {
    grid-template-columns: ${({ $position }) =>
      $position === "left" ? "auto 448px" : "448px auto"};

    ${StyledFeatureImageContent} {
      order: ${({ $position }) => ($position === "left" ? 2 : 0)};
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
  aspect-ratio: ${({ $imageWidth, $imageHeight }) =>
    $imageWidth && $imageHeight ? `${$imageWidth} / ${$imageHeight}` : "auto"};
  /* aspect-ratio: auto; */
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.tablet} {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
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
