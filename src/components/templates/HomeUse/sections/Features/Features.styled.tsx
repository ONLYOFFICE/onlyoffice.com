import styled from "styled-components";
import { device } from "@src/utils/device";

const HomeUseFeatureImageItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 232px;

  @media ${device.tabletS} {
    gap: 88px;
  }
`;

export { HomeUseFeatureImageItemWrapper };
