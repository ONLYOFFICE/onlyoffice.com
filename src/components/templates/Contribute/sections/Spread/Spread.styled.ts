import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSpreadContent = styled.div`
  max-width: 666px;
  margin: 0 auto 64px;
  display: grid;
  gap: 32px;
  text-align: center;

  p {
    font-size: 18px;
    line-height: 27px;

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 21px;
    }
  }

  a {
    font-size: 14px;
    line-height: 22px;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export { StyledSpreadContent };
