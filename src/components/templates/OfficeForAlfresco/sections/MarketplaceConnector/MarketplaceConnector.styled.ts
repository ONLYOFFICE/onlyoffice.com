import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #409160;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;
  min-height: 398px;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 57px);
    right: -101px;
    width: 812px;
    height: 834px;
    background-image: url(${getAssetUrl('/images/templates/office-for-alfresco/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      top: calc(50% + 36px);
      right: -333px;
    }

    @media ${device.mobile} {
      top: calc(50% + 16px);
      right: initial;
      left: -3px;
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
    min-height: 440px;
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
  width: 100%;
  height: 100%;
  background-image: url(${getAssetUrl('/images/templates/office-for-alfresco/marketplace-connector/app.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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
