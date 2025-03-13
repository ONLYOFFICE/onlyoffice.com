import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #0056cf;
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
    bottom: -91px;
    left: calc(50% - 102px);
    width: 920px;
    height: 513px;
    background-image: url("/images/templates/office-for-box/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tablet} {
      left: 50%;
      transform: translateX(-50%);
    }

    @media ${device.mobile} {
      bottom: -237px;
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
  padding: 24px 0;
  z-index: 1;

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

const StyledMarketplaceConnectorImg = styled.div`
  min-height: 440px;
  background-image: url("/images/templates/office-for-box/marketplace-connector/app.svg");
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
