import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledPartnersWrapper = styled.div`
  padding: 88px 0;
  overflow-x: auto;

  @media ${device.tablet} {
    padding: 88px 0;
  }

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

const StyledPartnersInner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 1200px;
  }

  @media ${device.mobile} {
    justify-content: unset;
    column-gap: 27px;
    width: 642px;
    padding: 0 16px;
  }
`;

const StyledPartnerLogo = styled.div<{
  $positionX: { desktop: string; mobile: string };
  $width: { desktop: string; mobile: string };
}>`
  background-image: url(${getAssetUrl('/images/templates/office-suite/customers.svg')});
  background-repeat: no-repeat;
  height: 90px;
  background-position-y: center;
  filter: grayscale(1);
  transition: filter 0.2s;
  background-position-x: ${(props) => props.$positionX.desktop};
  width: ${(props) => props.$width.desktop};

  &:hover {
    filter: grayscale(0);
  }

  @media ${device.mobile} {
    height: 44px;
    background-size: 607px;
    width: ${(props) => props.$width.mobile};
    background-position-x: ${(props) => props.$positionX.mobile};
  }
`;

export { StyledPartnersWrapper, StyledPartnersInner, StyledPartnerLogo };
