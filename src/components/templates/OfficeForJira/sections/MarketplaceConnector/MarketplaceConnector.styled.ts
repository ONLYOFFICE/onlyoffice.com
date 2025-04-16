import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #111111;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 15px);
    right: calc(100% - 460px);
    width: 700px;
    height: 700px;
    background-image: url("/images/templates/office-for-jira/marketplace-connector/logo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tabletS} {
      right: calc(100% - 300px);
    }
  }
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 552px;
  column-gap: 32px;
  min-height: 468px;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 400px auto;
  }

  @media ${device.tabletS} {
  grid-template-columns: auto 260px;
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
  width: 552px;
  height: 100%;
  background-image: url("/images/templates/office-for-jira/marketplace-connector/big-apps.svg");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  @media ${device.tabletS} {
  background-image: url("/images/templates/office-for-jira/marketplace-connector/small-apps.svg");
  width: 260px;
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
