import { Link } from "@src/components/ui/Link";
import {
  StyledFeatureImage,
  StyledFeatureImageContent,
  StyledFeatureImageText,
  StyledFeatureImageTitle,
  StyledFeatureImageWrapper,
} from "./FeatureTextImage.styled";
import { IFeatureTextImage } from "./FeatureTextImage.types";

const FeatureTextImage = ({
  id,
  className,
  position,
  contentWidth,
  gap,
  tabletGap,
  mobileGap,
  textGap,
  tabletTextGap,
  mobileTextGap,
  title,
  titleColor,
  titleLineHeight,
  titleFontSize,
  titleTabletFontSize,
  titleMobileFontSize,
  text,
  textColor,
  textLineHeight,
  textTabletFontSize,
  textMobileFontSize,
  link,
  image,
  imageWidth,
  imageHeight,
}: IFeatureTextImage) => {
  return (
    <StyledFeatureImageWrapper
      id={id}
      className={className}
      $position={position}
      $width={contentWidth}
      $gap={gap}
      $tabletGap={tabletGap}
      $mobileGap={mobileGap}
    >
      <StyledFeatureImageContent
        $textGap={textGap}
        $tabletTextGap={tabletTextGap}
        $mobileTextGap={mobileTextGap}
        $position={position}
      >
        <StyledFeatureImageTitle
          $titleColor={titleColor}
          $titleLineHeight={titleLineHeight}
          $fontSize={titleFontSize}
          $tabletFontSize={titleTabletFontSize}
          $mobileFontSize={titleMobileFontSize}
          label={title}
        />
        <StyledFeatureImageText
          $textColor={textColor}
          $textLineHeight={textLineHeight}
          $tabletFontSize={textTabletFontSize}
          $mobileFontSize={textMobileFontSize}
          label={text}
        />
        {link && (
          <Link
            href={link.href}
            color="#ff6f3d"
            textUnderline
            hover="underline-none"
          >
            {link.label}
          </Link>
        )}
      </StyledFeatureImageContent>
      <StyledFeatureImage
        $imageHeight={imageHeight}
        $imageWidth={imageWidth}
        $image={image.url}
        $image2x={image.url2x}
      />
    </StyledFeatureImageWrapper>
  );
};

export { FeatureTextImage };
