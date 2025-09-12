import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/office-for-dropbox/hero/hero.svg')});
  background-position: calc(50% - 70px) -564px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% - 146px) -564px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 266px) -564px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 928px;
  color: #333333;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
    margin: 0 auto 80px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
    margin: 0 auto 48px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 234px;
  height: 46px;
  background-image: url(${getAssetUrl('/images/templates/office-for-dropbox/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    margin: 0 auto 8px;
  }

  @media ${device.mobile} {
    width: 142px;
    height: 28px;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  margin: 0 auto;
  padding-bottom: 51.786%;
  max-width: 1047px;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}
`;

export { StyledHero, StyledHeroWrapper, StyledHeroLogo, StyledHeroImg };
