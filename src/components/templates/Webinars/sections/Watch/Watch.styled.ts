import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledWatchHeading = styled(Heading)`
  font-size: 36px;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledWatchList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 32px;
  margin-top: 64px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export {
  StyledWatchHeading,
  StyledWatchList
}