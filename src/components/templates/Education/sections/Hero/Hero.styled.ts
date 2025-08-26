import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;
  background-image: url("/images/templates/education/hero/clouds.svg");
  background-repeat: no-repeat;
  background-position: calc(50% + 190px) 23%;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position-x: center;
  }

  @media ${device.mobile} {
    background-position: 55% 35%;
  }

  @media ${device.mobileS} {
    background-position-y: 60%;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 458px auto;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 56px;
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
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.03em;

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
`;

const StyledHeroText = styled(Text)``;

const StyledHeroImage = styled.div`
  padding-bottom: 64.55%;
  background-image: url("/images/templates/education/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
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
