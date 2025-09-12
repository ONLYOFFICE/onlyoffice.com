import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #425e80;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div<{ $locale?: string }>`
  max-width: ${({ $locale }) =>
    $locale === "fr" ? "955px" : $locale === "zh" ? "975px" : "928px"};
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 80px;
  color: #ffffff;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
    margin: 0 auto 48px;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  max-width: 1120px;
  margin: 0 auto;
  padding-bottom: 64.286%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}

  @media ${device.tablet} {
    max-width: 768px;
    padding-bottom: 52.331%;
  }

  @media ${device.tabletS} {
    padding-bottom: 56.105%;
  }
`;

const StyledLBackImg = styled.div`
  background-image:
    url(../images/templates/e-book/hero/left.svg),
    url(../images/templates/e-book/hero/right.svg);
  background-position-x: 0%, 100%;
  background-position-y: 100%, 0%;
  background-size: 379px;
  background-repeat: no-repeat;
  width: 1500px;
  height: 491px;
  position: absolute;
  z-index: 0;
  left: 50%;
  transform: translate(-50%, -29%);
  bottom: 0;

  @media (max-width: 1500px) {
    background-size: auto 303px;
    height: 303px;
    width: 100vw;
  }
  @media ${device.tablet} {
    background-position-y: 100%, 100%;
    background-size: auto 223px;
    width: calc(100vw - 96px);
  }

  @media ${device.tabletS} {
    background-size: auto 165px;
    height: 225px;
    width: calc(100vw - 80px);
  }

  @media ${device.mobile} {
    background-size: auto 70px;
    height: 94px;
    width: 100vw;
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
`;

const StyledHeroInput = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  max-width: 702px;
  padding: 32px 96px;
  width: 100%;

  .input-wrapper {
    border-radius: 9px 0px 0px 9px;
  }
  > a {
    border-radius: 0px 9px 9px 0px;
  }

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
      width: 100%;
    }
    .input-wrapper {
      border-radius: 9px;
    }
    > a {
      border-radius: 9px;
    }
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroInput,
  StyledLBackImg,
  StyledImgWrapper,
};
