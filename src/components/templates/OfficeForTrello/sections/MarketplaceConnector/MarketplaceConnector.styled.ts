import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background: linear-gradient(to left, #00b8d9, #0065ff);
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 107px);
    left: calc(50% - 377px);
    width: 650px;
    height: 650px;
    background-image: url(${getAssetUrl('/images/templates/office-for-trello/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      width: 400px;
      height: 400px;
      top: calc(50% + 141px);
      left: calc(50% - 141px);
    }

    @media ${device.mobile} {
      top: calc(50% + 109px);
      right: 0;
      width: 300px;
      height: 300px;
      left: calc(100% - 204px);
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
    grid-template-columns: 340px auto;
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
  background-image: url(${getAssetUrl('/images/templates/office-for-trello/marketplace-connector/apps.svg')});
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
