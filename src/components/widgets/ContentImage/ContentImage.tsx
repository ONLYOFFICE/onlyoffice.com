import {
  StyledContentImage,
  StyledContentImageContent,
  StyledContentImageImgWrapper,
  StyledContentImageImg,
} from "./ContentImage.styled";
import { IContentImage } from "./ContentImage.types";

const ContentImage = ({
  id,
  className,
  children,
  contentWidth = 448,
  image: { width = 640, height = 504, ...image },
  gap,
  position: { desktop = "left", mobile = "top" } = {},
  rowGap,
  marginTop
}: IContentImage) => {
  return (
    <StyledContentImage
      id={id}
      className={className}
      $gap={gap}
      $position={{ desktop, mobile }}
      $rowGap={rowGap}
    >
      <StyledContentImageContent
        $marginTop={marginTop}
        $contentWidth={contentWidth}
        $position={{ desktop }}
        $gap={gap}
      >
        {children}
      </StyledContentImageContent>

      <StyledContentImageImgWrapper
        $image={{ width, ...image }}
        $position={{ desktop }}
      >
        <StyledContentImageImg $image={{ width, height, ...image }} />
      </StyledContentImageImgWrapper>
    </StyledContentImage>
  );
};

export { ContentImage };
