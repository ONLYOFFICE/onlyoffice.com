import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-repeat: no-repeat;
  background-image: url("/images/templates/automation-api/hero/background.svg");
  background-position: -10% calc(100% - 25px);
`;

const StyledHeroWrapper = styled.div`
  margin-left: 65px;
  display: grid;
  grid-template-columns: 448px auto;
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
  row-gap: 24px;
  max-width: 448px;

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
  font-weight: 700;
  font-size: 48px;
  line-height: 53px;

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.02em;
  }

  @media ${device.mobile} {
    font-size: 30px;
    line-height: 40px;
  }
`;

const StyledHeroSubheading = styled(Heading)`
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 75.71%;
  background-image: url("/images/templates/automation-api/hero/main_image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  max-width: 723px;

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
  StyledHeroSubheading,
};
