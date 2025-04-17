import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledDocsAppHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 700px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;


export { StyledDocsAppHeading };
