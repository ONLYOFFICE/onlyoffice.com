import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledLearnMore = styled(Section)`
  border-top: 1px solid #e2e2e2;
`;

const StyledLearnMoreHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledLearnMoreItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  .blog-card {
    @media ${device.tabletS} {
      min-width: 328px;
      height: initial;
    }

    @media ${device.mobile} {
      min-width: 240px;
    }
  }

  @media ${device.tabletS} {
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

export { StyledLearnMoreHeading, StyledLearnMore, StyledLearnMoreItems };
