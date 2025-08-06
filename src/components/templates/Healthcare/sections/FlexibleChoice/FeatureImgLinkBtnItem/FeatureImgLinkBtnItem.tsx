import {
  StyledILBContentImage,
  StyledImgLinkBtnItemContent,
  StyledImgLinkBtnItemText,
  StyledImgLinkBtnkBox,
  StyledFeatureImageItemLink,
} from "./FeatureImageItem.styled";
import { IFeatureImgLinkBtnItem } from "./FeatureImgLinkBtnItem.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const FeatureImgLinkBtnItem = ({
  id,
  className,
  heading,
  postheading,
  text,
  button,
  link,
  contentWidth,
  image,
  position,
}: IFeatureImgLinkBtnItem) => {
  return (
    <StyledILBContentImage
      id={id}
      className={className}
      contentWidth={contentWidth}
      position={position}
      image={{
        url: image.url,
        width: image.width,
        height: image.height,
      }}
    >
      <StyledImgLinkBtnItemContent>
        <Heading level={4} label={heading} />
        <Text label={postheading} />
        <StyledImgLinkBtnItemText>
          {text}
        </StyledImgLinkBtnItemText>

        <StyledImgLinkBtnkBox>
          <StyledFeatureImageItemLink
            href={link.href}
            color="#FF6F3D"
            textUnderline
            hover="underline-none"
            target={link.isExternal ? "_blank" : undefined}
          >
            {link.label}
          </StyledFeatureImageItemLink>
          <Button
            as="a"
            id={button.id}
            href={button.href}
            variant="primary"
            label={button.label}
          />
        </StyledImgLinkBtnkBox>
      </StyledImgLinkBtnItemContent>
    </StyledILBContentImage>
  );
};

export { FeatureImgLinkBtnItem };
