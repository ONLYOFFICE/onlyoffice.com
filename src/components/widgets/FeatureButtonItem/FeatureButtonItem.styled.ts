import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeatureButtonItem = styled.div`
  max-width: 544px;

  @media ${device.tablet} {
    max-width: 328px;
  }
`;

const StyledFeatureButtonItemIcon = styled.div<{ $iconUrl: string }>`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  background-image: ${(props) => `url(${props.$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export { StyledFeatureButtonItem, StyledFeatureButtonItemIcon };
