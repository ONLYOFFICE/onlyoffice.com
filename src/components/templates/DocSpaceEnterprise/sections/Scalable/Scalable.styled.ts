import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledScalableTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 926px;
  margin: 0 auto;
  padding: 32px 0 84px;

  @media ${device.tabletS} {
    padding-bottom: 58px;
  }

  @media ${device.mobile} {
    display: inline-block;
    text-align: center;
    padding: 16px 0 32px;

    p {
      display: inline;
    }
  }
`;

const StyledScalableImgWrapper = styled.div`
  max-width: 736px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 90vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { StyledScalableTextWrapper, StyledScalableImgWrapper };
