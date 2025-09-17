import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

const StyledSolutionSection = styled(Section)`
  padding-bottom: 0;
`;

const StyledSolutionsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 0 112px;
  overflow-x: scroll;
  scrollbar-width: none;

  @media ${device.tabletS} {
    padding-bottom: 80px;
  }

  @media ${device.mobile} {
    padding: 32px 0 48px;
  }
`;

const StyledSolutions = styled.div`
  display: flex;
  gap: 32px;
  padding: 0 40px;
  width: max-content;

  @media ${device.mobile} {
    gap: 16px;
    padding: 0 16px;
  }
`;

const StyledSolution = styled.div`
  width: 352px;
  border-radius: 3px;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);
  background: #fff;
  text-align: center;
  transition: box-shadow 0.3s ease;

  @media ${device.tabletS} {
    width: 320px;
  }

  @media ${device.mobile} {
    width: 240px;
  }

  &:hover {
    box-shadow: 0px 20px 40px rgba(0,0,0,0.1);
  }
`;

const StyledSolutionImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 274px;
  background-image: url(${({ $image }) => $image});
  background-size: 100% auto;
  background-repeat: no-repeat;

  @media ${device.tabletS} {
    height: 250px;
  }

  @media ${device.mobile} {
    height: 188px;
  }
`;

const StyledSolutionContent = styled.div`
  padding: 32px;
  display: grid;
  justify-items: center;
  gap: 16px;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledSolutionTitle = styled(Heading)``;

const StyledSolutionLink = styled(Link)``;

export {
  StyledSolutionSection,
  StyledSolutionsWrapper,
  StyledSolutions,
  StyledSolution,
  StyledSolutionImage,
  StyledSolutionContent,
  StyledSolutionTitle,
  StyledSolutionLink,
};
