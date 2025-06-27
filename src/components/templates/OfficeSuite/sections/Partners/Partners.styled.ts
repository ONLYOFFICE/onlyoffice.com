import { device } from "@src/utils/device";
import styled from "styled-components";

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

const StyledPartnerLogo = styled.div`
  background-image: url("/images/templates/office-suite/customers.svg");
  background-repeat: no-repeat;
  height: 90px;
  background-position-y: center;
  filter: grayscale(1);
  transition: filter 0.2s;

  &.suzuki {
    width: 130px;
    background-position-x: 20px;

    @media ${device.mobile} {
      width: 51.7px;
      background-position-x: 2px;
    }
  }

  &.one_happy_family {
    width: 150px;
    background-position-x: -140px;

    @media ${device.mobile} {
      width: 71px;
      background-position-x: -81px;
    }
  }

  &.unesco {
    background-position-x: -310px;
    width: 190px;

    @media ${device.mobile} {
      width: 94px;
      background-position-x: -180px;
    }
  }

  &.aarrnet {
    width: 150px;
    background-position-x: -530px;

    @media ${device.mobile} {
      width: 87px;
      background-position-x: -296px;
    }
  }

  &.gwdg {
    width: 84px;
    background-position-x: -720px;

    @media ${device.mobile} {
      width: 65px;
      background-position-x: -404px;
    }
  }

  &.ministry {
    background-position-x: -900px;
    width: 200px;

    @media ${device.mobile} {
      width: 96px;
      background-position-x: -500px;
    }
  }

  &:hover {
    filter: grayscale(0);
  }

  @media ${device.mobile} {
    height: 44px;
    background-size: 607px;
  }
`;

export { StyledPartnersWrapper, StyledPartnersInner, StyledPartnerLogo };