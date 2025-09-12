import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledPartnersWrapper = styled.div`
  padding: 112px 0;
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
    width: 642px;
    padding: 0 16px;
  }
`;

const StyledPartnerLogo = styled.div`
  background-image: url(${getAssetUrl('/images/templates/education/partners/partners-logos.svg')});
  background-repeat: no-repeat;
  height: 60px;
  background-position-y: center;
  filter: grayscale(1);
  transition: filter 0.2s;

  &.parissud {
    width: 70px;
    background-position-x: -20px;

    @media ${device.mobile} {
      width: 38px;
      background-position-x: -10px;
    }
  }

  &.strasbourg {
    width: 97px;
    background-position-x: -148px;

    @media ${device.mobile} {
      width: 52px;
      background-position-x: -74px;
    }
  }

  &.braunschweig {
    width: 124px;
    background-position-x: -301px;

    @media ${device.mobile} {
      width: 66px;
      background-position-x: -157px;
    }
  }

  &.karlsruhe {
    width: 92px;
    background-position-x: -483px;

    @media ${device.mobile} {
      width: 50px;
      background-position-x: -251px;
    }
  }

  &.lille {
    width: 84px;
    background-position-x: -633px;

    @media ${device.mobile} {
      width: 46px;
      background-position-x: -330px;
    }
  }

  &.bremen {
    width: 200px;
    background-position-x: -776px;

    @media ${device.mobile} {
      width: 108px;
      background-position-x: -404px;
    }
  }

  &.graz {
    width: 106px;
    background-position-x: -1033px;

    @media ${device.mobile} {
      width: 58px;
      background-position-x: -540px;
    }
  }

  &:hover {
    filter: grayscale(0);
  }

  @media ${device.mobile} {
    height: 32px;
    background-size: 607px;
  }
`;

export { StyledPartnersWrapper, StyledPartnersInner, StyledPartnerLogo };
