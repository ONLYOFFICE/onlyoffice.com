import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledScalableTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 926px;
  margin: 32px auto 84px;

  @media ${device.tabletS} {
    margin-bottom: 58px;
  }

  @media ${device.mobile} {
    display: inline-block;
    text-align: center;
    margin: 16px auto 32px;

    p {
      display: inline;
    }
  }
`;

const StyledScalableImgWrapper = styled.div`
  height: 460px;
  background-image: url(${getAssetUrl('/images/templates/docspace-enterprise/scalable/main_picture.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tablet} {
    height: 440px;
  }

  @media ${device.mobileS} {
    height: 205px;
  }
`;

export { StyledScalableTextWrapper, StyledScalableImgWrapper };
