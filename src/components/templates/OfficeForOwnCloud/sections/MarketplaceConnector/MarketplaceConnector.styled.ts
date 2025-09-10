import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #1d2d44;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  min-height: 468px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -82px;
    width: 724px;
    height: 440px;
    background-image: url("/images/templates/office-for-owncloud/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tablet} {
      right: initial;
      left: 152px;
    }

    @media ${device.tabletS} {
      left: 160px;
    }

    @media ${device.mobile} {
      top: calc(50% - 12px);
      left: 84px;
    }
  }

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
  height: 100%;
  background-image: url("/images/templates/office-for-owncloud/marketplace-connector/app.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 544px 468px;
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
