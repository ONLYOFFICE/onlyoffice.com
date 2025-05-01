import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledWorldwide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 160px 0 112px;
  background-color: #f8f9f9;

  @media ${device.tablet} {
    padding: 56px 0 88px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding: 32px 0;
  }

  h2 {
    color: #ff6f3d;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.8px;
    font-weight: 800;

    @media ${device.mobile} {
      font-size: 24px;
    }
  }
`;

const StyledWorldwideImgWrapper = styled.div`
  width: 64px;
  height: 52px;
  margin-bottom: 24px;

  @media ${device.mobile} {
    width: 49px;
    height: 40px;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { StyledWorldwide, StyledWorldwideImgWrapper };
