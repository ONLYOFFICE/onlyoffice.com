import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledWorldwideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 800;
  }

  p {
    @media ${device.mobile} {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const StyledWorldwideImgWrapper = styled.div`
  width: 64px;
  height: 52px;
  margin-bottom: 24px;
  background-image: url(${getAssetUrl('/images/templates/docspace-enterprise/hero/world_icon.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 49px;
    height: 40px;
    margin-bottom: 16px;
  }
`;

export { StyledWorldwideWrapper, StyledWorldwideImgWrapper };
