import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/office-for-nuxeo/hero/bg.svg')});
  background-repeat: no-repeat;
  background-position: top;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% - 128px) top;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 158px) top;
  }
`;

const StyledHeroWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto;
  max-width: 880px;
  text-align: center;
`;

const StyledHeroLogo = styled.div`
  width: 162px;
  height: 30px;
  background: url(${getAssetUrl('/images/templates/office-for-nuxeo/hero/logo.svg')}) no-repeat
    center;
  background-size: contain;

  @media ${device.mobile} {
    width: 108px;
    height: 20px;
    margin-bottom: -16px;
  }
`;

const StyledHeroHeader = styled.div`
  max-width: 880px;

  h1 {
    margin-bottom: 32px;
  }
`;

const StyledHeroSubHeading = styled(Heading)`
  margin-bottom: 48px;
  max-width: 720px;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroSubHeading,
};
