import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #5ec0cf;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 186px);
    left: calc(50% - 231px);
    width: 1100px;
    height: 1100px;
    background-image: url(${getAssetUrl('/images/templates/office-for-humhub/marketplace-connector/humhub.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      left: calc(50% - 141px);
    }

    @media ${device.mobile} {
      top: calc(50% + 56px);
      right: 0;
      width: 250px;
      height: 250px;
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
  background-image: url(${getAssetUrl('/images/templates/office-for-humhub/marketplace-connector/connector-img.svg')});
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
