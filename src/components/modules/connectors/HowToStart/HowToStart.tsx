import {
  StyledHowToStart,
  StyledHowToStartWrapper,
  StyledHowToStartList,
  StyledHowToStartItem,
  StyledHowToStartInfo,
  StyledHowToStartImgWrapper,
  StyledHowToStartImg,
} from "./HowToStart.styled";
import { IHowToStart } from "./HowToStart.types";
import { Heading } from "@src/components/ui/Heading";

const ConnectorHowToStart = ({
  id,
  className,
  heading,
  items,
  text,
  contentWidth = 448,
  image,
}: IHowToStart) => {
  return (
    <StyledHowToStart id={id} className={className}>
      <StyledHowToStartWrapper $contentWidth={contentWidth}>
        <Heading level={2} label={heading} />

        <StyledHowToStartList>
          {items.map((item, index) => (
            <StyledHowToStartItem key={index}>{item.text}</StyledHowToStartItem>
          ))}
        </StyledHowToStartList>

        <StyledHowToStartInfo>{text}</StyledHowToStartInfo>
      </StyledHowToStartWrapper>

      <StyledHowToStartImgWrapper $imageWidth={image.width ?? 640}>
        <StyledHowToStartImg
          $imageUrl={image.url ?? ""}
          $imageWidth={image.width ?? 640}
          $imageHeight={image.height ?? 378}
        />
      </StyledHowToStartImgWrapper>
    </StyledHowToStart>
  );
};

export { ConnectorHowToStart };
