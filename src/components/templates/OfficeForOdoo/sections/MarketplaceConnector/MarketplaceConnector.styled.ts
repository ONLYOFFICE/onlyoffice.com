import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #6b4d65;
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
    bottom: -88px;
    left: 2px;
    width: 1497px;
    height: 440px;
    background-image: url("/images/templates/office-for-odoo/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tabletS} {
      bottom: -90px;
      left: 288px;
    }

    @media ${device.mobile} {
      bottom: -233px;
      left: 267px;
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
  background-image: url("/images/templates/office-for-odoo/marketplace-connector/app.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 328px 560px;
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
