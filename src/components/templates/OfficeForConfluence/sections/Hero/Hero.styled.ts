import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #1c48aa;
  background-image: url(${getAssetUrl('/images/templates/office-for-confluence/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: top center;

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: calc(50% + 154px) top;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 928px;
  color: #ffffff;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 48px;
  height: 48px;
  background-image: url(${getAssetUrl('/images/templates/office-for-confluence/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;
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
  padding-bottom: 53.572%;
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
  StyledHeroHeaderBtns,
  StyledHeroImg,
};
