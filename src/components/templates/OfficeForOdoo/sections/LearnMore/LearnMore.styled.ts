import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledLearnMore = styled(Section)`
  border-top: 1px solid #e2e2e2;
`;

const StyledLearnMoreHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 664px;

  @media ${device.tabletS} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledLearnMoreItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  .blog-card {
    @media ${device.tablet} {
      max-width: 320px;
      min-width: 320px;
    }

    @media ${device.mobile} {
      max-width: 240px;
      min-width: 240px;
    }
  }

  @media ${device.tablet} {
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

export { StyledLearnMore, StyledLearnMoreHeading, StyledLearnMoreItems };
