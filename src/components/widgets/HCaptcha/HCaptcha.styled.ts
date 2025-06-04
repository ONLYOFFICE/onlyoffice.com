import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHCaptcha = styled.div`
  @media ${device.mobile} {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export { StyledHCaptcha };
