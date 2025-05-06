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
  desktopMaxWidth = "544px",
  tabletMaxWidth = "328px",
  mobileMaxWidth = "328px",
  icon: { url, width = "64px", height = "64px", mobileWidth, mobileHeight },
  heading,
  text,
  button,
  color,
}: IFeatureButtonItem) => {
  return (
    <StyledFeatureButtonItem
      id={id}
      className={className}
      $desktopMaxWidth={desktopMaxWidth}
      $tabletMaxWidth={tabletMaxWidth}
      $mobileMaxWidth={mobileMaxWidth}
    >
      <StyledFeatureButtonItemIcon
        $iconUrl={url}
        $iconWidth={width}
        $iconHeight={height}
        $iconMobileWidth={mobileWidth}
        $iconMobileHeight={mobileHeight}
      />
      <StyledFeatureButtonItemHeading level={5} size={4} color={color}>
        {heading}
      </StyledFeatureButtonItemHeading>
      <StyledFeatureButtonItemText size={1} color={color}>
        {text}
      </StyledFeatureButtonItemText>
      {button}
    </StyledFeatureButtonItem>
  );
};

export { FeatureButtonItem };
