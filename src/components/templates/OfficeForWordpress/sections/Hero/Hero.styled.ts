import { styled, css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f6f7f7;
  background-image: url(${getAssetUrl('/images/templates/office-for-wordpress/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: center -250px;

  @media (max-width: 2144px) {
    background-size: 2144px 1485px;
  }

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: center -477px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-size: 1326px 1032px;
    background-position: calc(50% + 38px) -350px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 42px;
  max-width: 928px;
  text-align: center;

  @media ${device.tabletS} {
    margin: 0 auto 32px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 55px;
  height: 55px;
  background-image: url(${getAssetUrl('/images/templates/office-for-wordpress/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

const StyledHeroVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  border-radius: 5px;
  padding-bottom: 53.572%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);

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
  StyledHeroVideo,
  StyledHeroImg,
};
