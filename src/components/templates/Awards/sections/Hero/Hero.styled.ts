import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-repeat: no-repeat;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/templates/awards/hero/it-awards-2024.jpg");
  background-size: cover;
  background-position-x: 50%;
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 40px;

  @media ${device.desktop} {
    margin-left: 0;
  }

  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 32px;
  color: #ffffff;
  max-width: 502px;

  @media ${device.desktop} {
    max-width: 50%;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    max-width: 100%;

    a {
      font-size: 14px;
    }
  }
`;

const StyledHeroHeading = styled(Heading)`
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 502px;
  padding-bottom: 32px;

  @media ${device.tabletS} {
    max-width: 100%;
  }

  @media ${device.mobile} {
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
  color: #E2E2E2;
  font-weight: 400;
  line-height: 1.6em;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledHeroImage = styled.div`
  height: 200px;
  width: 100%;
  background-image: url("/images/templates/awards/hero/cci_award_2024_platin_cloudcontentmanagement.svg");
  background-repeat: no-repeat;
  background-size: 542px auto;
  background-position: center;

  @media ${device.desktop} {
    padding-bottom: 75.71%;
    padding-bottom: 0;
    width: 100%;
    background-size: contain;
  }

  @media ${device.mobile} {
    padding-bottom: 75.71%;
    padding-bottom: 0;
    width: 288px;
    height: 143px;
    margin: 0;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroSubheading,
};
