import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledRoomFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 72px;

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledRoomFeatureButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;

    a {
      font-size: 12px;
    }
  }
`;

export { StyledRoomFeaturesWrapper, StyledRoomFeatureButtons };
