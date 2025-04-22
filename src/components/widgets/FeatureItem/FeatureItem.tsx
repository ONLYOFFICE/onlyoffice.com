import { StyledFeatureItem } from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const FeatureItem = ({
  id,
  className,
  variant = "vertical",
  icon,
  heading,
  text,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem
      id={id}
      className={className}
      $variant={variant}
      $icon={icon.url}
      $iconPositionX={icon.positionX}
      $iconPositionY={icon.positionY}
      $iconMobilePositionX={icon.mobilePositionX}
      $iconMobileHorizontalVariant={icon.mobileHorizontalVariant}
    >
      {heading && (
        <Heading level={5} size={5}>
          {heading}
        </Heading>
      )}
      <Text size={2}>{text}</Text>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
