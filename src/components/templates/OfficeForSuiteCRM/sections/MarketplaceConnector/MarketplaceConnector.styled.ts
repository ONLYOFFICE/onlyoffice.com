import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #26292e;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 23px);
    right: calc(50% - 623px);
    width: 691px;
    height: 678px;
    background-image: url(${getAssetUrl('/images/templates/office-for-suitecrm/marketplace-connector/bg.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tablet} {
      left: calc(50% - 262px);
    }

    @media ${device.mobile} {
      top: calc(50% + 63px);
      right: calc(50% - 463px);
      left: initial;
    }
  }
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;
  min-height: 468px;

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
  background-image: url(${getAssetUrl('/images/templates/office-for-suitecrm/marketplace-connector/apps.svg')});
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
