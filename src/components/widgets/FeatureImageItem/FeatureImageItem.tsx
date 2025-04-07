import {
  StyledFeatureImageItem,
  StyleFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
  StyledFeatureImageItemImgWrapper,
  StyledFeatureImageItemImg,
} from "./FeatureImageItem.styled";
import { IFeatureImageItem } from "./FeatureImageItem.types";
import { Heading } from "@src/components/ui/Heading";

const FeatureImageItem = ({
  id,
  className,
  title,
  text,
  links,
  image,
  position = "left",
}: IFeatureImageItem) => {
  return (
    <StyledFeatureImageItem id={id} className={className} $position={position}>
      <StyleFeatureImageItemContent>
        <Heading level={3} label={title} />
        <StyledFeatureImageItemText color="#666666" lineHeight="150%">
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
      </StyleFeatureImageItemContent>

      <StyledFeatureImageItemImgWrapper $position={position}>
        <StyledFeatureImageItemImg
          $imageHeight={image.height ?? 504}
          $image={image.url}
          $image2x={image.url2x}
        />
      </StyledFeatureImageItemImgWrapper>
    </StyledFeatureImageItem>
  );
};

export { FeatureImageItem };
