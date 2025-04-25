import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #EFEFEF;
  background-image: url("/images/templates/office-for-zoom/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: center -228px;

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: center -477px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 80px;
  max-width: 928px;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 32px;
    row-gap: 24px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 188px;
  height: 43px;
  background-image: url("/images/templates/office-for-zoom/hero/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    height: 28px;
    width: 120px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;

    @media ${device.mobile} {
      font-size: 24px;
      line-height: 1.33em;
    }
  }
`;

const StyledHeroHeaderBtns = styled.div`
  a {
    margin-right: 16px;
    background: #0E71EB;
    border-radius: 30px;
    padding: 7px 24px;
    font-weight: 700;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #0E71EB;
    }

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
      width: auto;
    }
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

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
};
