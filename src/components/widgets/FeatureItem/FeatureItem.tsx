import {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemText,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";

const FeatureItem = ({
  icon: { url, positionX = "0", positionY = "center" },
  heading,
}: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <StyledFeatureItemIcon $icon={{ url, positionX, positionY }} />
      <StyledFeatureItemText>{heading}</StyledFeatureItemText>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
