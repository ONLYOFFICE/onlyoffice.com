import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/office-for-box/hero/hero.svg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media ${device.tablet} {
    margin-top: -64px;
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
  max-width: 768px;
  color: #ffffff;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 72px;
  height: 40px;
  background-image: url("/images/templates/office-for-box/hero/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
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
