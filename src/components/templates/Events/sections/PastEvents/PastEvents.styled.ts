import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledPastEventsHeading = styled(Text)`
  margin-bottom: 32px;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.08em;
`;

const StyledPastEventsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px 100px;

  @media ${device.tabletS} {
    gap: 64px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 56px;
  }
`;

export { StyledPastEventsHeading, StyledPastEventsList };
