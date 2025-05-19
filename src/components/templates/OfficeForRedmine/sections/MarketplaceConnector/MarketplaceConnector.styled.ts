import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledMarketplaceConnector = styled.section`
  background-color: #870000;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(50% + 26px);
    right: calc(50% - 843px);
    width: 508px;
    height: 522px;
    background-image: url("/images/templates/office-for-redmine/marketplace-connector/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
    pointer-events: none;

    @media ${device.tablet} {
      left: calc(50% + 6px);
      top: calc(50% + 56px);
    }

    @media ${device.mobile} {
      top: calc(50% + 72px);
      right: calc(50% - 438px);
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
  max-width: 328px;
  height: 100%;
  background-image: url("/images/templates/office-for-redmine/marketplace-connector/apps.svg");
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
