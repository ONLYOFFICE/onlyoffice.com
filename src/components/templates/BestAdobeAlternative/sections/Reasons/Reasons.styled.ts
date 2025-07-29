import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesHeading = styled(Heading)`
  max-width: 878px;
  margin: 0 auto 72px;

  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 32px;

  > div:last-child {
    max-width: 584px;
    grid-column: span 2;
    margin: 0 auto;

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
