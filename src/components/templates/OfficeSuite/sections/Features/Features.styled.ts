import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 96px;

  @media ${device.mobile} {
    row-gap: 48px;
  }

  @media ${device.tabletS} {
    row-gap: 80px;
  }
`;

const StyledSubHeading = styled(Text)`
  margin-top: 24px;
  margin-bottom: 80px;

  @media ${device.tabletS} {
    row-gap: 48px;
    margin-bottom: 56px;
  }
`;

export { StyledFeaturesWrapper, StyledSubHeading };
