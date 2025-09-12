import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;
  background-image: url(${getAssetUrl('/images/templates/office-for-plone/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: calc(50% - 40px) -321px;
  background-size: 2053px 1853px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% - 9px) -143px;
    background-size: 1002px 907px;
  }
  @media ${device.mobile} {
    background-position: calc(50% + 106px) -106px;
    background-size: 729px 658px;
  }
`;

export const StyledHeroWrapper = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 32px;
  text-align: center;
`;

export const StyledHeroLogo = styled.div`
  width: 58px;
  height: 58px;
  background: url(${getAssetUrl('/images/templates/office-for-plone/hero/logo.svg')}) no-repeat
    center;
  background-size: contain;
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
