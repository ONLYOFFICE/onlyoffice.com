import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  SolutionCard,
  StyledSolutionCardImg,
} from "@src/components/widgets/SolutionCard";

const StyledSection = styled(Section)`
  border: 1px solid #e2e2e2;
`;

const StyledFreeAppsHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 630px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledSolutionCard = styled(SolutionCard)`
  max-width: 100%;

  ${StyledSolutionCardImg} {
    @media ${device.tablet} {
      padding-bottom: initial;
      height: 200px;
    }

    @media ${device.mobile} {
      height: 115px;
    }
  }
`;

export { StyledFreeAppsHeading, StyledSection, StyledSolutionCard };
