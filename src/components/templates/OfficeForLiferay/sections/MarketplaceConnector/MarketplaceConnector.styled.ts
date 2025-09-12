import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #0b63ce;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 468px;
    top: 50%;
    width: 100%;
    background-image:
      url(${getAssetUrl('/images/templates/office-for-liferay/marketplace-connector/bg.svg')}),
      url(${getAssetUrl('/images/templates/office-for-liferay/marketplace-connector/bg.svg')});
    background-position-y:
      100px,
      -235px;
    background-position-x: calc(50% - 588px), calc(50% + 891px);
    background-size: 600px, 600px;
    background-repeat: no-repeat;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.desktop} {
      background-image: url(${getAssetUrl('/images/templates/office-for-liferay/marketplace-connector/bg.svg')});
      background-size: contain;
      background-position: center;
      left: calc(50% - 888px);
      top: calc(50% + 167px);
      width: 600px;
      height: 600px;
    }

    @media ${device.tabletS} {
      top: calc(50% + 113px);
      left: calc(50% - 557px);
    }

    @media ${device.mobile} {
      top: calc(50% + 120px);
      width: 300px;
      height: 300px;
      left: calc(50% - 44px);
    }
  }
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 544px;
  column-gap: 32px;
  min-height: 468px;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 400px auto;
  }

  @media ${device.tabletS} {
    column-gap: 0px;
  }
  @media ${device.mobile} {
    grid-template-columns: initial;
    min-height: initial;
  }
`;

const StyledMarketplaceConnectorBody = styled.div`
  display: grid;
  row-gap: 24px;
  justify-items: start;
  padding: 24px 0;
  z-index: 1;

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

const StyledMarketplaceConnectorImg = styled.div`
  width: 544px;
  height: 100%;
  background-image: url(${getAssetUrl('/images/templates/office-for-liferay/marketplace-connector/apps.svg')});
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  @media ${device.mobile} {
    display: none;
  }
`;

export {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
};
