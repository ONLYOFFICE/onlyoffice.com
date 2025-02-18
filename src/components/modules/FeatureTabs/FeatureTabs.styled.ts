import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFeatureTabsHeading = styled(Heading)`
  margin-bottom: 56px;

  span {
    color: #ff6f3d;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
    text-align: initial;
  }
`;

const StyledFeatureTabsLinkWrapper = styled.div`
  margin-top: 56px;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 24px;
  }
`;

export { StyledFeatureTabsHeading, StyledFeatureTabsLinkWrapper };
