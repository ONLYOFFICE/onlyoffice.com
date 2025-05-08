import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import type { IFeatureButtonItem } from "./FeatureButtonItem.types";

const StyledFeatureButtonItem = styled.div<{
  $desktopMaxWidth: IFeatureButtonItem["desktopMaxWidth"];
  $tabletMaxWidth: IFeatureButtonItem["tabletMaxWidth"];
  $tabletSmallMaxWidth: IFeatureButtonItem["tabletSmallMaxWidth"];
  $mobileMaxWidth: IFeatureButtonItem["mobileMaxWidth"];
  $mobileSmallMaxWidth: IFeatureButtonItem["mobileSmallMaxWidth"];
  $position: IFeatureButtonItem["position"];
}>`
  max-width: ${(props) => props.$desktopMaxWidth};
  margin: 0 auto 24px;
  text-align: ${(props) => props.$position};

  @media ${device.tablet} {
    max-width: ${(props) => props.$tabletMaxWidth};
  }

  @media ${device.tabletS} {
    max-width: ${(props) => props.$tabletSmallMaxWidth};
  }

  @media ${device.mobile} {
    max-width: ${(props) => props.$mobileMaxWidth};
  }

  @media ${device.mobileS} {
    max-width: ${(props) => props.$mobileSmallMaxWidth};
  }
`;

const StyledFeatureButtonItemIcon = styled.div<{
  $iconUrl: IFeatureButtonItem["icon"]["url"];
  $iconWidth: IFeatureButtonItem["icon"]["width"];
  $iconHeight: IFeatureButtonItem["icon"]["height"];
  $iconMobileWidth: IFeatureButtonItem["icon"]["mobileWidth"];
  $iconMobileHeight: IFeatureButtonItem["icon"]["mobileHeight"];
  $position: IFeatureButtonItem["position"];
}>`
  width: ${(props) => props.$iconWidth};
  height: ${(props) => props.$iconWidth};
  background-image: ${(props) => `url(${props.$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  margin: ${(props) =>
    props.$position === "left"
      ? "0 auto 12px 0"
      : props.$position === "right"
      ? "0 0 12px auto"
      : "0 auto 12px"};

  @media ${device.mobile} {
    width: ${(props) => props.$iconMobileWidth};
    height: ${(props) => props.$iconMobileHeight};
  }
`;

const StyledFeatureButtonItemHeading = styled(Heading)`
  margin-bottom: 12px;
`;

const StyledFeatureButtonItemText = styled(Text)`
  margin-bottom: 28px;

  @media ${device.mobile} {
    margin: 0 0 20px;
  }
`;

export {
  StyledFeatureButtonItem,
  StyledFeatureButtonItemIcon,
  StyledFeatureButtonItemHeading,
  StyledFeatureButtonItemText,
};
