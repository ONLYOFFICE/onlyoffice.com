import { IFeatureButtonItem } from "./FeatureButtonItem.types";

import {
  StyledFeatureButtonItem,
  StyledFeatureButtonItemIcon,
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
      {heading}
      {text}
      {button}
    </StyledFeatureButtonItem>
  );
};

export { FeatureButtonItem };
