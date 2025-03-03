import {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemText,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";

const FeatureItem = ({ icon, heading }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <StyledFeatureItemIcon $icon={icon} />
      <StyledFeatureItemText>{heading}</StyledFeatureItemText>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
