import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledConnectorsHeading = styled(Heading)`
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledConnectorsNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledConnectorItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;
  }
`;

export { StyledConnectorsHeading, StyledConnectorsNav, StyledConnectorItems };
