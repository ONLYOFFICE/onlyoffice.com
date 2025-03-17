import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 112px;
  justify-content: center;

  @media ${device.tablet} {
    gap: 72px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

const StyledFeatureButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export { StyledFeaturesWrapper, StyledFeatureButtons };
