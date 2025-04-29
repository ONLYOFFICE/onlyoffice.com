import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesHeading = styled(Heading)`
  max-width: 884px;
  margin: 0 auto 72px;

  @media ${device.tabletS} {
    font-size: 32px;
    line-height: 43px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 24px;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 32px;
  justify-items: center;

  > div:last-child {
    max-width: 584px;
    grid-column: span 2;

    @media ${device.mobile} {
      grid-column: 1;
      text-align: start;

      &::before {
        left: 0;
        transform: none;
      }
    }
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export { StyledFeaturesHeading, StyledFeaturesWrapper };
