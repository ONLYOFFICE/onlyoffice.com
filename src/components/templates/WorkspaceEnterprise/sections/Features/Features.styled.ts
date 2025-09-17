import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 96px;
  > div {
    justify-content: space-around;
  }

  @media ${device.tabletS} {
    row-gap: 80px;
  }

  @media ${device.mobile} {
    row-gap: 56px;
  }
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 96px;

  @media ${device.tabletS} {
    padding-bottom: 56px;
  }

  @media ${device.mobile} {
    padding-bottom: 32px;
  }
`;

export { StyledFeaturesWrapper, StyledHeading };

