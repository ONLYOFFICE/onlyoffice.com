import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledScalable = styled.section`
  padding: 112px 0;
  text-align: center;

  @media ${device.tablet} {
    width: 90vw;
    margin: 0 auto;
  }

  @media ${device.tabletS} {
    padding: 80px 0;
  }

  @media ${device.mobile} {
    padding: 48px 0;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.33em;

    @media ${device.tabletS} {
      font-size: 30px;
      letter-spacing: -0.01em;
    }

    @media ${device.mobile} {
      font-size: 20px;
    }
  }
`;

const StyledScalableTextWrapper = styled.div`
  max-width: 926px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  padding: 32px 0 84px;
  text-align: center;

  @media ${device.tabletS} {
    padding-bottom: 58px;
  }

  @media ${device.mobile} {
    display: block;
    padding: 16px 0 32px;
  }

  .text {
    font-size: 18px;
    line-height: 160%;

    @media ${device.tabletS} {
      font-size: 16px;
    }

    @media ${device.mobile} {
      display: inline;
      font-size: 14px;
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

export { StyledScalable, StyledScalableTextWrapper, StyledScalableImgWrapper };
