import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMarketplaceConnector = styled.section`
  background-color: #333333;
`;

const StyledMarketplaceConnectorWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 717px 314px;
  justify-content: space-between;
  min-height: 418px;

  @media ${device.tablet} {
    min-height: 202px;
    padding: 80px 0;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    min-height: initial;
    text-align: center;
    padding: 48px 0;
  }
`;

const StyledMarketplaceConnectorBody = styled.div`
  display: grid;
  justify-items: start;
  padding-left: 96px;
  position: relative;
  z-index: 1;

  &::before {
    background-image: url(${getAssetUrl('/images/templates/technology-partners/features/tech-in-icons.svg')});
    background-position: -2136px 0;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 64px;
    width: 64px;
  }

  @media ${device.mobile} {
    padding: 88px 0 0;
    justify-items: center;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const StyledMarketplaceConnectorImg = styled.div`
  background-image: url(${getAssetUrl('/images/templates/technology-partners/partnership/transpatent-mail.svg')});
  background-repeat: no-repeat;
  height: 313px;
  left: 52vw;
  position: absolute;
  top: 29%;
  width: 314px;

  @media ${device.tablet} {
    left: 54vw;
    top: 20%;
  }

  @media ${device.tabletS} {
    left: 40vw;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledText = styled(Text)`
  margin: 16px 0 32px;
`;

export {
  StyledMarketplaceConnector,
  StyledMarketplaceConnectorWrapper,
  StyledMarketplaceConnectorBody,
  StyledMarketplaceConnectorImg,
  StyledText,
};
