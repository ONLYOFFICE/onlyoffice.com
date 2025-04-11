import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledReadyToShipIcon = styled.div`
  margin: 0 auto 32px;
  width: 64px;
  height: 64px;
  background-image: url("/images/templates/resellers/ready-to-ship/icon.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    margin: 0 auto 16px;
    width: 48px;
    height: 48px;
  }
`;

const StyledReadyToShipContent = styled.div`
  display: grid;
  row-gap: 16px;
  margin-bottom: 32px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledReadyToShipHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledReadyToShipButtonWrapper = styled.div`
  margin-bottom: 32px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

export {
  StyledReadyToShipIcon,
  StyledReadyToShipContent,
  StyledReadyToShipHeading,
  StyledReadyToShipButtonWrapper,
};
