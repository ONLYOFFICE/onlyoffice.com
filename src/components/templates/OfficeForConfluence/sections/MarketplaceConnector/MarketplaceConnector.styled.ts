import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #1c48aa;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -274px;
    width: 480px;
    height: 388px;
    background-image: url(${getAssetUrl('/images/templates/office-for-confluence/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tabletS} {
      right: -285px;
    }

    @media ${device.mobile} {
      top: 20px;
      bottom: initial;
      right: -216px;
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
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
  min-height: 440px;
  background-image: url(${getAssetUrl('/images/templates/office-for-confluence/marketplace-connector/app.svg')});
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
