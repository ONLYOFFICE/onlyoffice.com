import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 352px;
  text-align: center;
`;

const StyledFeatureItemIcon = styled.div<{ $icon: string }>`
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
  background-image: ${(props) => `url(${props.$icon})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledFeatureItemText = styled.p`
  font-size: 16px;
  line-height: 26px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export { StyledFeatureItem, StyledFeatureItemIcon, StyledFeatureItemText };
