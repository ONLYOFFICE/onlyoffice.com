import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #01679e;
  overflow: hidden;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(340px, 544px) 544px;
  column-gap: 32px;
  min-height: 468px;

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
  position: relative;
  height: 100%;

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("/images/templates/office-for-nextcloud/marketplace-connector/app.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 545px 468px;
    z-index: 1;

    @media ${device.mobile} {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -18px;
    right: -190px;
    width: 1144px;
    height: 331px;
    background-image: url("/images/templates/office-for-nextcloud/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.mobile} {
      bottom: 0;
      right: -16px;
      width: 280px;
      height: 172px;
      background-image: url("/images/templates/office-for-nextcloud/marketplace-connector/bg-mobile.svg");
    }
  }
`;

export {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
};
