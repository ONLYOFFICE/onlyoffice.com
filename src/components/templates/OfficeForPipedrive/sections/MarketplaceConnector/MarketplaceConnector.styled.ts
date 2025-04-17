import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #017737;
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
    top: calc(50% - 370px);
    right: calc(50% - 722px);
    width: 861px;
    height: 861px;
    background-image: url("/images/templates/office-for-pipedrive/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tabletS} {
      right: calc(50% - 652px);
    }

    @media ${device.mobile} {
      right: calc(50% - 581px);
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
  background-image: url("/images/templates/office-for-pipedrive/marketplace-connector/apps.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
