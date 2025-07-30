import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHowToStartHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

export { StyledHowToStartHeading };
