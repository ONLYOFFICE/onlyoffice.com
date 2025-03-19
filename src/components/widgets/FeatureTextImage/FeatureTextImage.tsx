import { Link } from "@src/components/ui/Link";
import {
  StyledFeatureImage,
  StyledFeatureImageContent,
  StyledFeatureImageText,
  StyledFeatureImageWrapper,
} from "./FeatureTextImage.styled";
import { IFeatureTextImage } from "./FeatureTextImage.types";
import { Heading } from "@src/components/ui/Heading";

const FeatureTextImage = ({
  id,
  className,
  title,
  text,
  links,
  image,
  imageWidth = 640,
  imageHeight,
}: IFeatureTextImage) => {
  return (
    <StyledFeatureImageWrapper id={id} className={className}>
      <StyledFeatureImageContent>
        <Heading level={3} label={title} />
        <StyledFeatureImageText label={text} />
        {links?.map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            color="#ff6f3d"
            textUnderline
            hover="underline-none"
          >
            {label}
          </Link>
        ))}
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
