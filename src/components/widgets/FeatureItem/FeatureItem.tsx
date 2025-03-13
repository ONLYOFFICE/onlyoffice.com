import {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemText,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";

const FeatureItem = ({
  icon,
  iconPositionX = "0",
  iconPositionY = "center",
  heading,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <StyledFeatureItemIcon
        $icon={icon}
        $iconPositionX={iconPositionX}
        $iconPositionY={iconPositionY}
      />
      <StyledFeatureItemText>{heading}</StyledFeatureItemText>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
