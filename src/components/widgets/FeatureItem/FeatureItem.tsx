import {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemWrapper,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const FeatureItem = ({
  id,
  className,
  variant = "vertical",
  mobileVariant = "vertical",
  icon: {
    url,
    width = "64px",
    height = "64px",
    positionX,
    positionY = "center",
    mobileWidth,
    mobileHeight,
    mobilePositionX,
    mobilePositionY,
    isSprite,
  },
  maxWidth,
  heading,
  text,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem
      id={id}
      className={className}
      $variant={variant}
      $mobileVariant={mobileVariant}
      $maxWidth={maxWidth}
      $iconWidth={width}
      $iconHeight={height}
      $iconMobileWidth={mobileWidth}
    >
      <StyledFeatureItemIcon
        aria-hidden
        $iconUrl={url}
        $iconWidth={width}
        $iconHeight={height}
        $iconPositionX={positionX}
        $iconPositionY={positionY}
        $iconMobileWidth={mobileWidth}
        $iconMobileHeight={mobileHeight}
        $iconMobilePositionX={mobilePositionX}
        $iconMobilePositionY={mobilePositionY}
        $iconIsSprite={isSprite}
      />

      <StyledFeatureItemWrapper>
        {heading && (
          <Heading level={5} size={5}>
            {heading}
          </Heading>
        )}
        <Text size={2}>{text}</Text>
      </StyledFeatureItemWrapper>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
