import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 56px;

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledFeaturesItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export { StyledFeaturesWrapper, StyledFeaturesItems };
