import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-repeat: no-repeat;
  background-color: #F1F3FF;

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
  row-gap: 40px;
  margin: 0 auto 48px;
  max-width: 928px;
  color: #333333;
  text-align: center;

  @media ${device.tabletS} {
    margin: 0 auto 80px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    margin: 0 auto 48px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 177px;
  height: 40px;
  background-image: url("/images/templates/office-for-monday/hero/monday_logo.png");
  background-repeat: no-repeat;

  @media ${device.mobile} {
    width: 128px;
    height: 32px;
    background-size: 128px;
    margin-bottom: 0px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }

  p {
    max-width: 572px;
    margin: auto;
  }
`;

const StyledHeroVideo = styled.div`
  position: relative;
  border: 6px solid #ffffff;
  padding-bottom: calc(56.25% - 6px);
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
  StyledHeroVideo,
};
