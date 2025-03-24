import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #26292e;
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
    top: 50%;
    right: -6px;
    width: 691px;
    height: 678px;
    background-image: url("/images/templates/office-for-chamilo/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      top: calc(50% - 10px);
      right: -112px;
    }

    @media ${device.mobile} {
      top: calc(50% + 63px);
      right: initial;
      left: calc(50% - 240px);
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
  background-image: url("/images/templates/office-for-chamilo/marketplace-connector/connector-img.svg");
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
