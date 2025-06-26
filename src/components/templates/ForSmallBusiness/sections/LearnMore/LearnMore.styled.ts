import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledLearnMoreHeading = styled(Heading)`
  margin: 0 auto 56px;
  text-align: center;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledLearnMoreItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  .blog-card {
    max-width: 100%;
    min-width: 100%;

    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }

  @media ${device.tablet} {
    max-width: none;
    grid-template-columns: repeat(4, 1fr);
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

export {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
};
