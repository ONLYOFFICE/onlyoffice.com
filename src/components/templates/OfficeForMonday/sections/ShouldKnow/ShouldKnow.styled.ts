import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledShouldKnowBlock = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 9px;
  padding: 32px;
`;

const StyledShouldKnowText = styled.div`
`;

const StyledShouldKnowImage = styled.img`
  width: 100%;

  @media ${device.tabletS} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledShouldKnowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  padding-top: 32px;

  p {
    font-size: 16px;
    text-align: left;
    line-height: 1.5em;
    padding-top: 8px;
    font-weight: 400;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

export { StyledShouldKnowBlock, StyledShouldKnowWrapper, StyledShouldKnowImage, StyledShouldKnowText };
