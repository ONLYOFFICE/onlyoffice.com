import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledWrapper = styled.div`
  > div {
    scroll-margin-top: 72px;
    @media ${device.tablet} {
      scroll-margin-top: 64px;
    }
    @media ${device.mobile} {
      scroll-margin-top: 48px;
    }
  }
`;

export { StyledWrapper };
