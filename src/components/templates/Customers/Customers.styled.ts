import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCustomersBgWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background-image: url("/images/templates/customers/hero/map.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #F5F5F5;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

export { StyledCustomersBgWrapper }