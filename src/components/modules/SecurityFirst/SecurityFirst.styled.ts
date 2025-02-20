import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledSecurityFirst = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 352px;
  column-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
  }
`;

const StyledSecurityFirstImage = styled.div`
  padding-bottom: 77.58%;
  background-image: url("/images/main/security/secure.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 120dpi),
    only screen and (min-width: 592px) {
    background-image: url("/images/main/security/secure@2x.png");
  }
`;

const StyledSecurityFirstContent = styled.div`
  display: grid;
  align-items: start;
  row-gap: 32px;

  @media ${device.tablet} {
    order: -1;
  }
`;

const StyledSecurityFirstList = styled.ul`
  color: #ffffff;

  li {
    position: relative;
    padding-left: 34px;
    font-size: 16px;
    line-height: 26px;

    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 8px;
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      background: #ff6f3d;
    }

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const StyledSecurityFirstLink = styled(Link)`
  font-size: 16px;
  line-height: 26px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledSecurityFirstFeatures = styled.ul`
  display: flex;

  li {
    width: 64px;
    height: 64px;
    background-image: url("/images/main/security/features.svg");
    background-repeat: no-repeat;

    &:not(:last-child) {
      margin-right: 56px;
    }

    &:nth-child(2) {
      background-position-x: -120px;
    }
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export {
  StyledSecurityFirst,
  StyledSecurityFirstImage,
  StyledSecurityFirstContent,
  StyledSecurityFirstList,
  StyledSecurityFirstLink,
  StyledSecurityFirstFeatures,
};
