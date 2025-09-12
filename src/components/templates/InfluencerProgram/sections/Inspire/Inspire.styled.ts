import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledInspireWrapper = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: auto 448px;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    margin-top: 32px;
  }
`;

const StyledInspireImage = styled.div`
  width: 100%;
  padding-bottom: 55.157%;
  background-image: url(${getAssetUrl('/images/templates/influencer-program/inspire/inspire.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.tabletS} {
    width: 480px;
    height: 265px;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 159px;
  }
`;

const StyledInspireContent = styled.div`
  display: grid;
  gap: 16px;

  @media ${device.mobile} {
    p,
    a {
      font-size: 14px;
    }
  }
`;

export { StyledInspireWrapper, StyledInspireImage, StyledInspireContent };
