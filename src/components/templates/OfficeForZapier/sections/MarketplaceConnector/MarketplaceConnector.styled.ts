import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #f9f9f9;
  border-top: 1px solid #e2e2e2;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 148px);
    width: 1486px;
    height: 402px;
    background-image: url(${getAssetUrl('/images/templates/office-for-zapier/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      top: calc(50% + 29px);
      left: calc(50% - 342px);
    }

    @media ${device.mobile} {
      top: calc(50% + 22px);
      left: calc(50% - 375px);
    }
  }
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;
  min-height: 440px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
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
  max-width: 328px;
  height: 100%;
  background-image: url(${getAssetUrl('/images/templates/office-for-zapier/marketplace-connector/apps.svg')});
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
