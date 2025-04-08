import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledRoomsFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 72px;

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledRoomsFeatureButtons = styled.div`
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

export { StyledRoomsFeaturesWrapper, StyledRoomsFeatureButtons };
