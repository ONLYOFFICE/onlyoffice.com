import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #F9F9F9;
  background-image: url("/images/templates/office-for-zoom/marketplace-connector/bg.svg");
  background-size: 1416px 755px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 100% 50%;

  @media ${device.mobile} {
    background-size: 700px 100%;;

    p {
      font-size: 14px;
    }
  }
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 328px;
  column-gap: 32px;
  min-height: 398px;

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
  width: 100%;
  min-width: 328px;
  height: 100%;
  background-image: url("/images/templates/office-for-zoom/marketplace-connector/apps.svg");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledMarketplaceConnectorBtn = styled.div`
  a {
    margin-right: 16px;
    background: #0E71EB;
    border-radius: 30px;
    padding: 7px 24px;
    font-weight: 700;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #0E71EB;
    }

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
      width: auto;
    }
  }
`;

export {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
  StyledMarketplaceConnectorBtn,
};
