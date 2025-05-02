import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledWorldwideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 800;
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

export { StyledWorldwideWrapper, StyledWorldwideImgWrapper };
