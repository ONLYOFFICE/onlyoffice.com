import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesHeading = styled(Heading)`
  max-width: 752px;
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

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export { StyledFeaturesHeading, StyledFeaturesWrapper };
