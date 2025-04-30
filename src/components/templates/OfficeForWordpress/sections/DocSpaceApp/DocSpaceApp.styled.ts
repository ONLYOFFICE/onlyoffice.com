import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledDocSpaceHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 720px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledDocSpaceAppBtnWrapper = styled.div`
  margin: 56px auto 0;
  text-align: center;

  @media ${device.mobile} {
    margin: 32px auto 0;
  }
`;

export { StyledDocSpaceHeading, StyledDocSpaceAppBtnWrapper };
