import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledComparisonHeading = styled(Heading)`
  max-width: 992px;
  margin: 0 auto 56px;
  text-align: center;
`;

const StyledComparisonCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 55px 32px;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export { StyledComparisonHeading, StyledComparisonCardsWrapper };
