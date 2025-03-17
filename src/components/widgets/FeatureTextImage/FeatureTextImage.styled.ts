import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IFeatureTextImage } from "./FeatureTextImage.types";

const StyledFeatureImageWrapper = styled.div<{
  $width: IFeatureTextImage["contentWidth"];
  $gap: IFeatureTextImage["gap"];
  $tabletGap: IFeatureTextImage["tabletGap"];
  $mobileGap: IFeatureTextImage["mobileGap"];
  $position: IFeatureTextImage["position"];
}>`
  max-width: 1120px;
  display: grid;
  grid-template-columns: ${({ $position, $width }) =>
    $position === "left" ? `${$width} auto` : `auto ${$width}`};
  column-gap: ${({ $gap }) => $gap || "32px"};
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: ${({ $tabletGap }) => $tabletGap || "24px"};
  }

  @media ${device.mobile} {
    gap: ${({ $mobileGap }) => $mobileGap || "16px"};
  }
`;

const StyledFeatureImageContent = styled.div<{
  $textGap: IFeatureTextImage["textGap"];
  $tabletTextGap: IFeatureTextImage["tabletTextGap"];
  $mobileTextGap: IFeatureTextImage["mobileTextGap"];
  $position: IFeatureTextImage["position"];
}>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ $textGap }) => $textGap || "16px"};
  order: ${({ $position }) => $position === "right" && 2};

  @media ${device.tablet} {
    row-gap: ${({ $tabletTextGap }) => $tabletTextGap || "16px"};
    order: 0;
  }

  @media ${device.mobile} {
    row-gap: ${({ $mobileTextGap }) => $mobileTextGap || "8px"};
    order: 0;
  }
`;

const StyledFeatureImageTitle = styled(Heading)<{
  $fontSize: IFeatureTextImage["titleFontSize"];
  $tabletFontSize: IFeatureTextImage["titleTabletFontSize"];
  $mobileFontSize: IFeatureTextImage["titleMobileFontSize"];
  $titleLineHeight: IFeatureTextImage["titleLineHeight"];
  $titleColor: IFeatureTextImage["titleColor"];
}>`
  font-size: ${({ $fontSize }) => $fontSize || "24px"};
  line-height: ${({ $titleLineHeight }) => $titleLineHeight || "1.33em"};
  color: ${({ $titleColor }) => $titleColor || "#333"};

  @media ${device.tablet} {
    font-size: ${({ $tabletFontSize }) => $tabletFontSize || "20px"};
  }

  @media ${device.mobile} {
    font-size: ${({ $mobileFontSize }) => $mobileFontSize || "18px"};
  }
`;

const StyledFeatureImageText = styled(Text)<{
  $tabletFontSize: IFeatureTextImage["textTabletFontSize"];
  $mobileFontSize: IFeatureTextImage["textMobileFontSize"];
  $textLineHeight: IFeatureTextImage["textLineHeight"];
  $textColor: IFeatureTextImage["textColor"];
}>`
  color: ${({ $textColor }) => $textColor || "#666"};
  line-height: ${({ $textLineHeight }) => $textLineHeight || "1.5em"};

  @media ${device.tablet} {
    font-size: ${({ $tabletFontSize }) => $tabletFontSize || "16px"};
  }

  @media ${device.mobile} {
    font-size: ${({ $mobileFontSize }) => $mobileFontSize || "13px"};
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
  StyledFeatureImageTitle,
  StyledFeatureImageText,
  StyledFeatureImage,
};
