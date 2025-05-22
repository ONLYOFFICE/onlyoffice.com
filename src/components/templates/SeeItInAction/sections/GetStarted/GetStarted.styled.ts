import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledGetStartedHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tabletS} {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledGetStartedSmallItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 56px;

  @media ${device.tabletS} {
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

const StyledGetStartedLargeItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

export {
  StyledGetStartedHeading,
  StyledGetStartedSmallItems,
  StyledGetStartedLargeItems,
};
