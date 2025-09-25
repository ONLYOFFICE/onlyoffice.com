import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledInstallationSuccessWorkspaceEnterpriseHero = styled(Section)`
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
      -670px -20px,
      center;
  }
`;

const StyledInstallationSuccessWorkspaceEnterpriseHeroImage = styled.div`
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

const StyledEditorsAreaImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/installation-success-workspace/hero/mascot.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 337px;
  width: 347px;
  position: absolute;
  bottom: -30px;
  left: 0px;

  @media ${device.tablet} {
    height: 26vw;
    width: 25vw;
  }

  @media ${device.mobile} {
    bottom: -12px;
    left: calc(50% - 20vw);
    height: 124px;
    width: 40vw;
  }
`;

const StyledEditorsAreaLeft = styled.div`
  background-color: #f9f9f9;
  padding: 24px;
  position: relative;
  text-align: left;

  @media ${device.mobile} {
    padding-bottom: 136px;
    text-align: center;
  }
`;

const StyledEditorsArea = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 368px auto;
  gap: 56px;
  margin: 0 auto;
  padding: 56px;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 35% auto;
  }

  @media ${device.tabletS} {
    padding: 32px;
    gap: 32px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
  }
`;

const StyledEditorsAreaRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  text-align: left;

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledEditorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  text-align: left;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > a {
    width: fit-content;
  }

  @media ${device.tabletS} {
    gap: 24px;
  }

  @media ${device.mobile} {
    > a {
      width: 100%;
    }
  }
`;

const StyledEditorsListItem = styled.div`
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

const StyledEditorsText = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 1.6em;
  text-align: left;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledInstallationSuccessWorkspaceEnterpriseHero,
  StyledInstallationSuccessWorkspaceEnterpriseHeroImage,
  StyledEditorsArea,
  StyledEditorsAreaRight,
  StyledEditorsAreaLeft,
  StyledList,
  StyledEditorsList,
  StyledEditorsListItem,
  StyledHeading,
  StyledEditorsAreaImage,
  StyledEditorsText,
};

export const StyledCard = styled.div`
  max-width: 70rem;
  background: #fff;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: stretch;
  gap: 2rem;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 48px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
`;

export const StyledInfoBox = styled.div`
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media ${device.tablet} {
    width: 100%;
    padding: 30px 20px;
  }

  @media ${device.mobile} {
    padding: 20px 16px;
  }
`;

export const StyledBoxTitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: #333333;
  margin: 0 0 20px;
  text-align: left;
  padding: 24px;

  @media ${device.mobile} {
    font-size: 20px;
  }
  span {
    color: #ff6f3d;
  }
`;

export const StyledOptionsContainer = styled.div`
  width: 100%;
  display: grid row;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  text-align: left;

  @media ${device.tablet} {
    width: 100%;
    padding: 30px 20px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const StyledOptionTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: #333333;
  padding: 0 0 32px;
  span {
    color: #ff6f3d;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export const StyledOptionList = styled.ul`
  list-style: none;
  padding: 0 0 24px;
`;
