import styled from "styled-components";
import { device } from "@src/utils/device";
import { IFeatureItem } from "./FeatureItem.types";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledFeatureItem = styled.div`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledFeatureItemIcon = styled.div<{
  $iconUrl: IFeatureItem["icon"]["url"];
  $iconPositionX: IFeatureItem["icon"]["positionX"];
  $iconMobilePositionX: IFeatureItem["icon"]["mobilePositionX"];
}>`
  margin-right: 24px;
  width: 130px;
  min-width: 130px;
  height: 130px;
  background-image: url(${(props) => props.$iconUrl});
  background-size: auto 130px;
  background-position-y: center;
  background-position-x: ${(props) => props.$iconPositionX};

  @media ${device.mobile} {
    margin: 0 0 8px;
    width: 87px;
    min-width: 87px;
    height: 87px;
    background-size: auto 87px;
    background-position-x: ${(props) => props.$iconMobilePositionX};
  }
`;

const StyledFeatureItemWrapper = styled.div`
  display: grid;
  align-content: start;
  justify-items: start;
  row-gap: 16px;

  @media ${device.tabletS} {
    justify-items: initial;
  }

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureItemText = styled(Text)`
  p {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const StyledFeatureItemLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;

  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemWrapper,
  StyledFeatureItemText,
  StyledFeatureItemLink,
};
