import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 88px;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 56px;

  @media ${device.tabletS} {
    padding-bottom: 32px;
  }
`;

export { StyledFeaturesWrapper, StyledHeading };
