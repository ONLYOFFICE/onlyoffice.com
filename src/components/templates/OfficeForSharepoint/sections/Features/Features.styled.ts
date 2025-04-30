import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFeaturesHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 810px;

  @media ${device.mobile} {
    margin: 0 auto 24px;
    text-align: initial;
  }
`;

const StyledFeaturesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 16px;
  }
`;

export { StyledFeaturesHeading, StyledFeaturesItems };
