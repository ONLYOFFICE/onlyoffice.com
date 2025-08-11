import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledUpcomingHeading = styled(Heading)`
  font-size: 36px;
  margin-bottom: 64px;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledUpcomingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 32px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export {
  StyledUpcomingHeading,
  StyledUpcomingList
};