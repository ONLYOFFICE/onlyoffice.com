import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCheckEmail = styled.div`
  display: grid;
  row-gap: 32px;
  margin-top: 90px;
  width: 100%;
  max-width: 518px;
  text-align: center;

  @media ${device.tabletS} {
    margin: 0 auto;
  }
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
  line-height: 24px;
  background-color: #f8f9f9;
`;

const StyledCheckEmailLink = styled.button`
  justify-self: center;
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    justify-self: initial;
    text-align: center;
  }
`;

export {
  StyledCheckEmail,
  StyledCheckEmailImage,
  StyledCheckEmailBanner,
  StyledCheckEmailLink,
};
