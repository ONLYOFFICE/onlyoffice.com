import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

const StyledPresentationHeading = styled(Heading)`
  max-width: 544px;
  margin: 0 auto 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledPresentationSlide = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 590px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 688px;
    height: 415px;
  }

  @media ${device.tabletS} {
    width: 90vw;
    height: 54vw;
  }

  @media ${device.mobile} {
    height: 58vw;
  }
`;

export { StyledPresentationHeading, StyledPresentationSlide };
