import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledInstallationSuccessWorkspaceHero = styled(Section)`
  background-image:
    url(${getAssetUrl('/images/templates/installation-success-workspace/hero/bg.svg')}),
    linear-gradient(180deg, #ff8e3d 0%, #ff6f3d 100%);
  background-position:
    center 0,
    center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, 100%;
  position: relative;
  margin-top: -72px;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-width: 1680px) {
    background-size:
      1680px auto,
      100%;
  }

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position:
      -440px -20px,
      center;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position:
      -520px -20px,
      center;
  }
`;

const StyledInstallationSuccessWorkspaceHeroImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/installation-success-workspace/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: 56px;
  height: 56px;
  margin: 0 auto;
  padding: 0 0 24px;
  width: 56px;
  box-sizing: unset;

  @media ${device.mobile} {
    background-size: contain;
    height: 48px;
    padding: 0 0 8px;
    width: 48px;
  }
`;

const StyledUpgradeAreaImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/installation-success-workspace/hero/mascot.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  height: 100%;

  @media ${device.tabletS} {
    height: 248px;
    background-position-x: center;
  }

  @media ${device.mobile} {
    height: 182px;
  }
`;

const StyledUpgradeArea = styled.div`
  background-color: #ffffff;
  background-position: 64px center;
  background-repeat: no-repeat;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 347px auto;
  gap: 48px;
  margin: 0 auto;
  padding: 64px;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 30% auto;
  }

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    padding: 48px;
    gap: 24px;
  }

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledUpgradeAreaRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;

  @media ${device.mobile} {
    gap: 16px;
  }

  .coupon-span {
    color: #ff6f3d;
    background-color: #fff1db;
  }
`;

const StyledUpgradeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  text-align: left;
`;

const StyledUpgradeListItem = styled.div`
  font-size: 16px;
  line-height: 1.6em;
  padding-left: 20px;
  position: relative;

  &:before {
    display: block;
    content: "";
    background: #ff6f3d;
    width: 6px;
    height: 6px;
    left: 0px;
    top: 8px;
    position: absolute;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledButtonsArea = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  color: #ffffff;
  margin: 0 auto;
  padding: 0 0 88px;
  text-align: center;
  width: 830px;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.tabletS} {
    padding: 0 0 64px;
  }

  @media ${device.mobile} {
    padding: 0 0 48px;
  }
`;

const StyledCouponHeading = styled(Heading)`
  font-size: 24px;
  line-height: 1.33em;

  @media ${device.tabletS} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export {
  StyledInstallationSuccessWorkspaceHero,
  StyledInstallationSuccessWorkspaceHeroImage,
  StyledUpgradeArea,
  StyledUpgradeAreaRight,
  StyledUpgradeList,
  StyledUpgradeListItem,
  StyledButtonsArea,
  StyledHeading,
  StyledUpgradeAreaImage,
  StyledCouponHeading,
};
