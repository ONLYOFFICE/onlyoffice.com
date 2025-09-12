import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #efefef;
  background-image: url(${getAssetUrl('/images/templates/office-for-telegram/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: 35% 0;
  position: relative;
  overflow: hidden;

  &:before {
    background-image:
      url(${getAssetUrl('/images/templates/office-for-telegram/hero/left.svg')}),
      url(${getAssetUrl('/images/templates/office-for-telegram/hero/right.svg')});
    content: "";
    display: block;
    background-position-x: 0%, 100%;
    background-position-y: 90%;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    z-index: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    height: 600px;
    max-width: 1500px;

    @media ${device.tablet} {
      background-size: 335px;
      background-position-x: -125px, 77vw;
      background-position-y: 100%;
      height: 500px;
    }

    @media ${device.mobile} {
      background-size: 150px;
      background-position-x: -25%, 77vw;
      background-position-y: 100%;
      height: 500px;
    }
  }

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% + 334px) -627px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 928px;
  text-align: center;
  z-index: 1;
  position: relative;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  background-image: url(${getAssetUrl('/images/templates/office-for-telegram/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 56px;
    height: 56px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

const StyledHeroHeaderBtns = styled.div`
  display: flex;

  button {
    margin-right: 16px;

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  @keyframes bob {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }

  border-radius: 5px;
  padding-bottom: 48.572%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  &:after {
    background-image: url(${getAssetUrl('/images/templates/office-for-telegram/hero/bot.svg')});
    background-repeat: no-repeat;
    content: "";
    display: block;
    width: 252px;
    height: 242px;
    position: absolute;
    bottom: 10px;
    right: -12%;
    animation: bob 2s ease-in-out infinite;

    @media ${device.tablet} {
      width: 176px;
      height: 169px;
      background-size: 176px;
    }

    @media ${device.mobile} {
      width: 100px;
      height: 97px;
      background-size: 100px;
    }
  }

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
  StyledHeroHeaderBtns,
  StyledHeroImg,
};
