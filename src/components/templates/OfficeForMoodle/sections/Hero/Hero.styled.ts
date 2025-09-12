import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/office-for-moodle/hero/bg.svg')});
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
    margin: 0 auto 80px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    margin: 0 auto 48px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 188px;
  height: 47px;
  background-image: url(${getAssetUrl('/images/templates/office-for-moodle/hero/logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 112px;
    height: 28px;
  }
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
