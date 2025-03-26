import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IFeatureItem } from "./FeatureItem.types";

const StyledFeatureItemWrapper = styled.div<{
  $variant: IFeatureItem["variant"];
  $sprite: IFeatureItem["sprite"];
  $icon: IFeatureItem["icon"];
  $iconPositionX: IFeatureItem["iconPositionX"];
  $iconPositionY: IFeatureItem["iconPositionY"];
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  padding: ${({ $variant }) =>
    $variant === "horizontal" ? "0 0 0 88px" : "80px 0 0 0"};

  @media ${device.mobile} {
    padding: 80px 0 0 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: ${({ $variant }) => ($variant === "vertical" ? "50%" : "0")};
    transform: ${({ $variant }) =>
      $variant === "vertical" ? "translateX(-50%)" : "none"};
    width: 64px;
    height: 64px;
    background-image: url(${({ $sprite, $icon }) => $sprite || $icon});
    background-repeat: no-repeat;
    background-position: ${({ $iconPositionX, $iconPositionY }) =>
      `${$iconPositionX} ${$iconPositionY}`};
  }
`;

const StyledFeatureItemTitle = styled(Heading)<{
  $variant: IFeatureItem["variant"];
}>`
  font-size: 18px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: ${({ $variant }) =>
    $variant === "vertical" ? "center" : "left"};

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledFeatureItemText = styled(Text)<{
  $variant: IFeatureItem["variant"];
}>`
  font-size: 16px;
  line-height: 150%;
  text-align: ${({ $variant }) =>
    $variant === "vertical" ? "center" : "left"};

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledFeatureItemWrapper,
  StyledFeatureItemTitle,
  StyledFeatureItemText,
};
