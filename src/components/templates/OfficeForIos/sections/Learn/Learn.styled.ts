import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledLearnHeading = styled(Heading)`
  @media ${device.tabletS} {
    width: 90vw;
    margin: 0 auto;
  }
`;

const StyledLearnList = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 56px 0;

  @media ${device.desktop} {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 56px 40px;
    gap: 32px;
  }

  @media ${device.mobile} {
    padding: 24px 16px 16px;
  }

  .blog-card {
    height: auto;

    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }
`;

export { StyledLearnHeading, StyledLearnList };
