import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;
  background-image: url(${getAssetUrl('/images/templates/healthcare/hero/cardiorgam.svg')});
  background-repeat: no-repeat;
  background-position: calc(50% + 190px) 50%;

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 50% 40%;
  }

  @media ${device.mobile} {
    background-size: auto 211px;
  }

  @media ${device.mobile} {
    background-position: 47% 62%
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  align-items: center;
  column-gap: 14px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  @media ${device.mobile} {
    gap: 80px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 30px;

  @media ${device.tabletS} {
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  line-height: 1.33em;

  @media ${device.mobile} {
    letter-spacing: -0.01em;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  max-width: 450px;
  
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 1.5em;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 400px;
  background-image: url(${getAssetUrl('/images/templates/healthcare/hero/hero-image.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  
  @media ${device.desktop} {
    padding-bottom: 32.5vw;
  }

  @media ${device.tablet} {
    max-width: 674px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 63.25%;
  }

  @media ${device.mobile} {
    padding-bottom: 68%;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
};
