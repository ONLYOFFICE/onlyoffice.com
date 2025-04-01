import {
  StyledFeatureItem,
  StyledFeatureItemTitle,
  StyledFeatureItemText,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";

const FeatureItem = ({
  variant = "vertical",
  icon,
  title,
  text,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem
      $variant={variant}
      $icon={icon.url}
      $iconPositionX={icon.positionX}
      $iconPositionY={icon.positionY}
    >
      {title && (
        <StyledFeatureItemTitle $variant={variant} level={5}>
          {title}
        </StyledFeatureItemTitle>
      )}
      <StyledFeatureItemText $variant={variant}>{text}</StyledFeatureItemText>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
