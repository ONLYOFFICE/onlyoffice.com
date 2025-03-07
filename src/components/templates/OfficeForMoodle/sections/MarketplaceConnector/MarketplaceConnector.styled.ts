import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  border-top: 1px solid #e2e2e2;
  background-color: #444444;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -97px;
    width: 1497px;
    height: 440px;
    background-image: url("/images/templates/office-for-moodle/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tablet} {
      left: 50%;
      transform: translateX(-50%);
    }

    @media ${device.tabletS} {
      left: -175px;
      bottom: -128px;
      transform: initial;
    }

    @media ${device.mobile} {
      left: -26px;
      bottom: -170px;
      width: 658px;
      height: 382px;
      background-image: url("/images/templates/office-for-moodle/marketplace-connector/bg-mobile.svg");
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
  }
`;

const StyledMarketplaceConnectorBody = styled.div`
  display: grid;
  row-gap: 24px;
  justify-items: start;
  padding: 56px 0;
  z-index: 1;

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

const StyledMarketplaceConnectorImg = styled.div`
  min-height: 440px;
  background-image: url("/images/templates/office-for-moodle/marketplace-connector/app.svg");
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
