import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroHeading = styled(Heading)`
  max-width: 994px;
  margin: 172px auto 40px;

  @media ${device.tabletS} {
    margin-top: 112px;
  }

  @media ${device.mobile} {
    margin-top: 64px;
  }

  @media ${device.mobileS} {
    margin-top: 48px;
    margin-bottom: 24px;
  }
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${device.mobileS} {
    flex-direction: column;
  }
`;

export { StyledHeroHeading, StyledHeroButtonsWrapper }