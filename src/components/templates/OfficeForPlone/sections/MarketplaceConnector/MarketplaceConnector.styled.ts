import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #006c9d;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 206px);
    right: calc(50% - 899px);
    width: 1150px;
    height: 1151px;
    background-image: url(${getAssetUrl('/images/templates/office-for-plone/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      width: 901px;
      height: 901px;
      left: calc(50% - 278px);
      top: calc(50% + 172px);
    }

    @media ${device.mobile} {
      width: 321px;
      height: 320px;
      top: calc(50% + 103px);
      right: calc(50% - 265px);
      left: initial;
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

  @media ${device.tablet} {
    grid-template-columns: 400px auto;
  }

  @media ${device.tabletS} {
    grid-template-columns: 360px auto;
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
  background-image: url(${getAssetUrl('/images/templates/office-for-plone/marketplace-connector/apps.svg')});
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  @media ${device.tabletS} {
    background-position: left;
  }

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
