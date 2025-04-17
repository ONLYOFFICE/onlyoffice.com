import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #4945FF;
  overflow: hidden;
  position: relative;

  &::after {
  content: "";
    position: absolute;
    top: calc(50% + 42px);
    right: calc(50% - 747px);
    width: 548px;
    height: 588px;
    background-image: url("/images/templates/office-for-strapi/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tablet} {
      left: calc(50% - 114px);
    }

    @media ${device.mobile} {
    width: 326px;
    height: 350px;
      top: calc(50% + 2px);
      right: calc(50% - 220px);
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
    grid-template-columns: auto 306px;
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
  background-image: url("/images/templates/office-for-strapi/marketplace-connector/apps.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 1;

  @media ${device.tabletS} {
    width: 306px;
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
