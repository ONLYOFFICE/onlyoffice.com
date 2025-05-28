import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCustomersBgWrapper = styled.div`
  background-image: url("/images/templates/customers/hero/map.svg");
  background-size: auto 930px;
  background-repeat: no-repeat;
  background-position: 50% -145px;
  background-color: #F5F5F5;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
    background-position-y: -34px;
    background-size: auto 750px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-size: auto 585px;
  }

  @media ${device.mobile} {
    background-size: auto 450px;
  }

  @media ${device.mobileS} {
    background-size: auto 600px;
  }
`;

export { StyledCustomersBgWrapper }