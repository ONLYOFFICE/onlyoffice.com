import styled, { css } from "styled-components";
import { IHCaptcha } from "./HCaptcha.types";
import { device } from "@src/utils/device";

const StyledHCaptcha = styled.div`
  @media ${device.mobile} {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const StyledHCaptchaWrapper = styled.div<{ $position: IHCaptcha["position"] }>`
  ${(props) =>
    props.$position === "center" &&
    css`
      display: flex;

      > div {
        margin: 0 auto;
      }
    `}
`;

const StyledHCaptchaError = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: #cb0000;
  text-align: center;
`;

export { StyledHCaptcha, StyledHCaptchaWrapper, StyledHCaptchaError };
