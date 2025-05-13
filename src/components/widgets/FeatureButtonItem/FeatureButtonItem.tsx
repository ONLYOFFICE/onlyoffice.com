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
  tabletSmallMaxWidth = "328px",
  mobileMaxWidth = "328px",
  mobileSmallMaxWidth = "288px",
  icon: { url, width = "64px", height = "64px", mobileWidth, mobileHeight },
  heading,
  text,
  button,
  color,
  position = "center",
}: IFeatureButtonItem) => {
  return (
    <StyledFeatureButtonItem
      id={id}
      className={className}
      $desktopMaxWidth={desktopMaxWidth}
      $tabletMaxWidth={tabletMaxWidth}
      $tabletSmallMaxWidth={tabletSmallMaxWidth}
      $mobileMaxWidth={mobileMaxWidth}
      $mobileSmallMaxWidth={mobileSmallMaxWidth}
      $position={position}
    >
      <StyledFeatureButtonItemIcon
        $iconUrl={url}
        $iconWidth={width}
        $iconHeight={height}
        $iconMobileWidth={mobileWidth}
        $iconMobileHeight={mobileHeight}
        $position={position}
      />
      <StyledFeatureButtonItemHeading
        level={5}
        size={4}
        color={color}
        textAlign={position}
      >
        {heading}
      </StyledFeatureButtonItemHeading>
      <StyledFeatureButtonItemText size={1} color={color} textAlign={position}>
        {text}
      </StyledFeatureButtonItemText>
      {button}
    </StyledFeatureButtonItem>
  );
};

export { FeatureButtonItem };
