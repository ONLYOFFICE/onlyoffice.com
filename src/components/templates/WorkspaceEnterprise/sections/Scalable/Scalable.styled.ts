import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledScalableTextWrapper = styled.div`
  max-width: 736px;
  margin: 32px auto 64px;

  @media ${device.tabletS} {
    margin-bottom: 60px;
  }

  @media ${device.mobile} {
    margin: 24px auto 32px;
  }
`;

const StyledScalableImgWrapper = styled.div`
  height: 460px;
  background-image: url("/images/templates/workspace-enterprise/scalability/enterprise.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tablet} {
    height: 440px;
  }
  
  @media ${device.mobileS} {
    height: 200px;
  }
`;

export { StyledScalableTextWrapper, StyledScalableImgWrapper };
