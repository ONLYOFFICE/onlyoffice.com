import { IFeatureButtonItem } from "./FeatureButtonItem.types";

import {
  StyledFeatureButtonItem,
  StyledFeatureButtonItemIcon,
  StyledFeatureButtonItemHeading,
  StyledFeatureButtonItemText,
} from "./FeatureButtonItem.styled";

const FeatureButtonItem = ({
  id,
  className,
  iconUrl,
  heading,
  text,
  button,
}: IFeatureButtonItem) => {
  return (
    <StyledFeatureButtonItem id={id} className={className}>
      <StyledFeatureButtonItemIcon $iconUrl={iconUrl} />
      <StyledFeatureButtonItemHeading level={5} size={4} color="#fff">
        {heading}
      </StyledFeatureButtonItemHeading>
      <StyledFeatureButtonItemText size={1} color="#fff">
        {text}
      </StyledFeatureButtonItemText>
      {button}
    </StyledFeatureButtonItem>
  );
};

export { FeatureButtonItem };
