import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCareDataWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  margin-top: 56px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StyledCareData = styled.div`
  padding-top: 96px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
    background-image: url("/images/modules/converter/convert_icons.svg");
    background-repeat: no-repeat;
  }

  &.WeDoNotTrack::before {
    background-position-x: -120px;
  }

  &.YouDoNotStore::before {
    background-position-x: -240px;
  }

  &.WeGuarantee::before {
    background-position-x: -360px;
  }
`;

export { StyledCareDataWrapper, StyledCareData };
