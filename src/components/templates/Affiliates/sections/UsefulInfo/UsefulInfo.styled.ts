import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledTopInfoCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 56px 0 32px;

  @media ${device.tablet} {
    margin-top: 40px;
  }

  @media ${device.mobile} {
    margin: 24px 0 16px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StyledBottomInfoCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 352px);
  justify-content: center;
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export { StyledTopInfoCardsWrapper, StyledBottomInfoCardsWrapper };
