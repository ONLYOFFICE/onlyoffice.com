import React from "react";
import {
  StyledFeatureItemWrapper,
  StyledFeatureItemTitle,
  StyledFeatureItemText,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";

const FeatureItem = ({
  variant = "vertical",
  sprite,
  icon,
  iconPositionX = "0px",
  iconPositionY = "center",
  title,
  text,
}: IFeatureItem) => {
  return (
    <StyledFeatureItemWrapper
      $variant={variant}
      $sprite={sprite}
      $icon={icon}
      $iconPositionX={iconPositionX}
      $iconPositionY={iconPositionY}
    >
      {title && (
        <StyledFeatureItemTitle $variant={variant} level={5}>
          {title}
        </StyledFeatureItemTitle>
      )}
      <StyledFeatureItemText $variant={variant}>{text}</StyledFeatureItemText>
    </StyledFeatureItemWrapper>
  );
};

export { FeatureItem };
