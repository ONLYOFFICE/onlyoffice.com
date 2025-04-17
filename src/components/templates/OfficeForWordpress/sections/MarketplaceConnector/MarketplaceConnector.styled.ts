import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #f9f9f9;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;
  min-height: 440px;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 381px);
    right: calc(50% - 1289px);
    width: 1731px;
    height: 1459px;
    background-image: url("/images/templates/office-for-wordpress/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      width: 1020px;
      height: 860px;
      top: calc(50% + 141px);
      right: calc(50% - 734px);
    }

    @media ${device.mobile} {
      width: 640px;
      height: 640px;
      top: calc(50% + 100px);
      right: calc(50% - 548px);
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
  width: 328px;
  height: 100%;
  background-image: url("/images/templates/office-for-wordpress/marketplace-connector/apps.svg");
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
