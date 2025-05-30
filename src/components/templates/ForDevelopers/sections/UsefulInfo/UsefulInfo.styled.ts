import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { StyledInfoCard } from "./sub-components/InfoCard/InfoCard.styled";

const StyledUsefullInfoHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tablet} {
    margin-bottom: 48px;
  }

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledUsefullInfoTopItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
    margin-bottom: 16px;
  }
`;

const StyledUsefullInfoBottomItems = styled.div`
  display: flex;
  justify-content: center;

  ${StyledInfoCard} {
    max-width: 352px;

    &:not(:last-child) {
      margin-right: 32px;
    }

    @media ${device.tablet} {
      max-width: 100%;
    }
  }

  @media ${device.mobile} {
    display: grid;
    row-gap: 16px;
  }
`;

export {
  StyledUsefullInfoHeading,
  StyledUsefullInfoTopItems,
  StyledUsefullInfoBottomItems,
};
