import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFormMessage = styled.div`
  margin-top: 56px;

  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

export { StyledFormMessage };
