import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledPartnersWrapper = styled.div`
  padding: 112px 0 80px;
  overflow-x: auto;

  @media ${device.desktop} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${device.tablet} {
    padding: 88px 40px;
  }

  @media ${device.mobile} {
    padding: 48px 16px;
  }
`;

const StyledPartnersInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media ${device.desktop} {
    width: 1200px;
  }

  @media ${device.mobile} {
    width: 696px;
  }
`;

const StyledPartnerLogo = styled.div`
  background-image: url("/images/templates/healthcare/partners-logos.svg");
  background-position-y: center;
  background-repeat: no-repeat;
  filter: grayscale(1);
  height: 68px;
  transition: filter 0.5s;

  &.unesco-iiep {
    width: 170px;

    @media ${device.mobile} {
      width: 95px;
    }
  }

  &.croix-rouge {
    background-position-x: -217px;
    width: 148px;

    @media ${device.mobile} {
      background-position-x: -126px;
      width: 90px;
    }
  }

  &.cbg {
    background-position-x: -420px;
    width: 136px;

    @media ${device.mobile} {
      background-position-x: -247px;
      width: 81px;
    }
  }

  &.iccf {
    background-position-x: -612px;
    width: 215px;

    @media ${device.mobile} {
      background-position-x: -360px;
      width: 127px;
    }
  }

  &.ipph {
    background-position-x: -883px;
    width: 248px;

    @media ${device.mobile} {
      background-position-x: -519px;
      width: 148px;
    }
  }

  &.derlab {
    background-position-x: -1187px;
    width: 122px;

    @media ${device.mobile} {
      background-position-x: -698px;
      width: 72px;
    }
  }

  &:hover {
    filter: grayscale(0);
  }

  @media ${device.mobile} {
    background-size: auto 40px;
    height: 46px;
  }
`;

export { StyledPartnersWrapper, StyledPartnersInner, StyledPartnerLogo };
