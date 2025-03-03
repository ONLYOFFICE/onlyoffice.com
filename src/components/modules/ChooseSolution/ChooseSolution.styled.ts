import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledChooseSolutionHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledChooseSolutionWrapper = styled.div`
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
  }
`;

const StyledChooseSolutionLargeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export {
  StyledChooseSolutionHeading,
  StyledChooseSolutionWrapper,
  StyledChooseSolutionItems,
  StyledChooseSolutionLargeItems,
};
