import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledChooseSolution = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyledChooseSolutionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

const StyledChooseSolutionLargeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
`;

export {
  StyledChooseSolution,
  StyledChooseSolutionItems,
  StyledChooseSolutionLargeItems,
};
