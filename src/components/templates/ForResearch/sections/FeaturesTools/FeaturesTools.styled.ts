import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesHeader = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  margin: auto;

  h2 {
    color: #808080;
    font-size: 50px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    z-index: 0;
    left: -15px;
    opacity: 0.2;
  }

  h3 {
    z-index: 1;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledFeaturesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 64px 0 0;

  a {
    color: #FF6F3D;
    text-decoration: underline;
    font-size: 14px;
  }

  p {
    padding: 0 0 24px;
    color: #666666;
    font-size: 14px;
    line-height: 1.6em;
  }

  h5 {
    line-height: 1.33em;
    font-size: 16px;
  }

  > div {
   backgrounf-size: 840px;
    @media ${device.desktop} {
      width: calc(33.333% - 24px);
      max-width: 100%;
    }

    @media ${device.tablet} {
      width: calc(50% - 16px);
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;

export { StyledFeaturesHeader, StyledFeaturesItems };
