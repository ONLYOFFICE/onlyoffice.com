import {
  StyledFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
} from "./FeatureImageItem.styled";
import { IFeatureImageItem } from "./FeatureImageItem.types";
import { ContentImage } from "../ContentImage";
import { Heading } from "@src/components/ui/Heading";

const FeatureImageItem = ({
  id,
  className,
  heading,
  text,
  links,
  contentWidth = 448,
  image,
  position,
  fontSize,
  rowGap,
  gap,
  marginTop
}: IFeatureImageItem) => {
  return (
    <ContentImage
      id={id}
      className={className}
      contentWidth={contentWidth}
      position={position}
      rowGap={rowGap}
      gap={gap}
      marginTop={marginTop}
      image={{
        url: image.url,
        url2x: image.url2x,
        width: image.width,
        height: image.height,
      }}
    >
      <StyledFeatureImageItemContent>
        <Heading level={3} label={String(heading)} />
        <StyledFeatureImageItemText color="#666666" $fontSize={fontSize}>
          {text}
        </StyledFeatureImageItemText>
        {links?.map(({ href, label, isExternal }, index) => (
          <StyledFeatureImageItemLink
            key={index}
            href={href}
            fontSize="16px"
            lineHeight="26px"
            color="#ff6f3d"
            textUnderline
            hover="underline-none"
            target={isExternal ? "_blank" : undefined}
          >
            {label}
          </StyledFeatureImageItemLink>
        ))}
      </StyledFeatureImageItemContent>
    </ContentImage>
  );
};

export { FeatureImageItem };
