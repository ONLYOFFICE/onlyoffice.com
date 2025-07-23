import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-repeat: no-repeat;
  background-color: #ffffff;
`;

const StyledHeroWrapper = styled.div`
  margin-left: 120px;
  display: grid;
  grid-template-columns: 400px auto;
  align-items: center;
  gap: 40px;

  @media ${device.desktop} {
    grid-template-columns: 1fr;
    text-align: center;
    margin-left: 0;
  }

  @media ${device.mobile} {
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 32px;
  color: #ffffff;
  max-width: 400px;

  @media ${device.desktop} {
    justify-items: center;
    text-align: center;
    max-width: 100%;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  letter-spacing: -0.03em;

  @media ${device.desktop} {
    max-width: 795px;
  }

  @media ${device.tablet} {
    font-size: 44px;
    line-height: 59px;
    letter-spacing: -0.02em;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledHeroSubheading = styled(Heading)`
  font-weight: 400;
  line-height: 27px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 75.71%;
  background-image: url("/images/templates/for-enterprises/hero/hero_image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  max-width: 647px;

  @media ${device.desktop} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 100%;
    height: 480px;
  }

  @media ${device.tabletS} {
    padding-bottom: 75.71%;
    height: initial;
  }

  @media ${device.mobile} {
    padding-bottom: 0;
    width: 288px;
    height: 218px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroSubheading
};
