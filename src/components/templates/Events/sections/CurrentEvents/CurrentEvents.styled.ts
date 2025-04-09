import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledCurrentEventsHeading = styled(Heading)`
  margin-bottom: 32px;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.08em;
`;

const StyledCurrentEventsItems = styled.div`
  display: grid;
  row-gap: 64px;

  @media ${device.tabletS} {
    row-gap: 56px;
  }
`;

export { StyledCurrentEventsHeading, StyledCurrentEventsItems };
