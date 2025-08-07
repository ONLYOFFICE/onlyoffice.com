import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledVideosBlock = styled.div`
  display: grid;
  gap: 36px;
  margin: 40px 0;
`;

const StyledVideosBlockIframe = styled.iframe`
  width: 87%;
  height: 408px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  @media ${device.tablet} {
    width: 100%;
    height: 360px;
  }

  @media ${device.tabletS} {
    width: 100%;
    height: 50.5vw;
  }
`;

export { StyledVideosBlock, StyledVideosBlockIframe };
