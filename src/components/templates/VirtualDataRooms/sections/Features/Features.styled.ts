import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  justify-content: center;

  @media ${device.mobile} {
    gap: 56px;
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
