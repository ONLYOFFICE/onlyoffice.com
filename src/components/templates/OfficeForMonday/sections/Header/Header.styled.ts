import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  position: fixed;
  top: 0px;
  z-index: 2;

  @media ${device.tablet} {
    height: 52px;
  }

  @media ${device.mobile} {
    height: 48px;
  }
`;

const StyledHeader = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 40px;
`;

const StyledHeaderImage = styled.img`
  margin-top: 23px;

  @media ${device.tablet} {
    margin-top: 15px;
  }

  @media ${device.mobile} {
    margin-top: 12px;
  }
`;

export {
  StyledHeaderContainer,
  StyledHeader,
  StyledHeaderImage
};
