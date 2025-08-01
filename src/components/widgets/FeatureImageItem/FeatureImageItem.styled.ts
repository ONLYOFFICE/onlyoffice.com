import styled from "styled-components";
import { IFeatureImageItem } from "./FeatureImageItem.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledFeatureImageItemContent = styled.div<{
  $contentWidth?: IFeatureImageItem["contentWidth"];
  $position?: IFeatureImageItem["position"];
}>`
  display: grid;
  row-gap: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureImageItemText = styled.div<{ $fontSize: IFeatureImageItem["fontSize"]}>`
  font-size: ${props => props.$fontSize || "16px"};
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledFeatureImageItemLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
};
