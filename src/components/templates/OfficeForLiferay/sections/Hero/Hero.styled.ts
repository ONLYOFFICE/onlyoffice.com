import { styled, css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background:
    url(${getAssetUrl('/images/templates/office-for-liferay/hero/bg.svg')}) no-repeat,
    linear-gradient(#ffffff, #e1eaf7);
  background-position-y: -230px, center;
  background-position-x: center;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: calc(50% + 12px) -229px;
    background-size: 1442px 1303px;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 10px) -141px;
    background-size: 927px 837px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 928px;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  background-image: url(${getAssetUrl('/images/templates/office-for-liferay/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 48px;
    height: 48px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  border-radius: 5px;
  padding-bottom: 55%;
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

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroImg,
};
