import { StyledFeatureItem } from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const FeatureItem = ({
  className,
  variant = "vertical",
  icon,
  heading,
  text,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem
      className={className}
      $variant={variant}
      $icon={icon.url}
      $iconPositionX={icon.positionX}
      $iconPositionY={icon.positionY}
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
