import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHeading = styled(Heading)`
  padding-bottom: 96px;

  @media ${device.tabletS} {
    padding-bottom: 56px;
  }

  @media ${device.mobile} {
    padding-bottom: 24px;
  }
`;

export { StyledHeading };
