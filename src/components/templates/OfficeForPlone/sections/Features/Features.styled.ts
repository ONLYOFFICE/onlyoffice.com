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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  > div {
    @media ${device.desktop} {
      width: calc(50% - 24px);
      max-width: 100%;
    }

    @media ${device.mobile} {
      display: flex;
      gap: 8px;
      text-align: center;
      width: 100%;
    }
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

export { StyledFeaturesWrapper, StyledFeaturesItems };
