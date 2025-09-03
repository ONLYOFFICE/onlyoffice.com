import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCheckEmail = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 32px auto 0;
  width: 100%;
  max-width: 518px;
  text-align: center;
`;

const StyledCheckEmailImage = styled.div`
  margin: 0 auto 8px;
  width: 140px;
  height: 140px;
  background-image: url("/images/templates/docspace-registration/hero/check-email.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledCheckEmailBanner = styled.div`
  border-radius: 3px;
  padding: 16px 8px;
  font-size: 16px;
  line-height: 1.5em;
  background-color: #f8f9f9;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledCheckEmail,
  StyledCheckEmailImage,
  StyledCheckEmailBanner,
};
