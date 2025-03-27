import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #0B63CE;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 468px;
    top: 50%;
    width: 100%;
    background-image: url("/images/templates/office-for-liferay/marketplace-connector/bg.svg"), url("/images/templates/office-for-liferay/marketplace-connector/bg.svg");
    background-position-y: 100px, -235px;
    background-position-x: 5%, 119%;
    background-size: 600px, 600px;
    background-repeat: no-repeat;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.desktop} {
      background-image: url("/images/templates/office-for-liferay/marketplace-connector/bg.svg");
      background-position-y: 47px;
      background-position-x: -220px;
      background-size: 600px;
    }

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
  background-image: url("/images/templates/office-for-liferay/marketplace-connector/apps.svg");
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
