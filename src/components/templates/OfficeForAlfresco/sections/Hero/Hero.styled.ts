import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #efefef;
  background-image: url(${getAssetUrl('/images/templates/office-for-alfresco/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: center -228px;

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: center -477px;
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

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 56px;
  height: 56px;
  background-image: url(${getAssetUrl('/images/templates/office-for-alfresco/hero/logo.svg')});
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
  StyledHeroImg,
};
