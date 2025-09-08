import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledAIAssistantsHeading = styled(Heading)`
  margin-bottom: 56px;
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
    text-align: initial;
  }
`;

const StyledAIAssistantsLinkWrapper = styled.div`
  margin-top: 56px;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 24px;
  }
`;

export { StyledAIAssistantsHeading, StyledAIAssistantsLinkWrapper };
