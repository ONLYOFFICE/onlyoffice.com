import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  background-image: url("/images/templates/certificates/hero/orange-line.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledHeroContainer = styled(Container)`
  max-width: 1280px;
  padding: 0;
`;

const StyledHeroWrapper = styled.div`
  background-color: #f5f5f5;
  background-image: url("/images/templates/certificates/hero/gray-line.svg");
  background-repeat: no-repeat;
  background-position: center calc(50% - 7px);
  display: grid;
  grid-template-columns: 448px auto;
  gap: 32px;
  align-items: center;
  padding: 24px 80px 30px;

  @media ${device.tablet} {
    grid-template-columns: 304px auto;
    padding: 24px 0 30px 48px;
  }

  @media ${device.tabletS} {
    background-size: auto 223px;
    background-position-y: 65px;
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0;
  }

  @media ${device.mobile} {
    background-size: auto 153px;
    background-position-y: 112.5px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  text-align: start;

  @media ${device.tabletS} {
    text-align: center;
    padding: 84.5px 40px;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 48px 16px 24px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;
  line-height: 33px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.tabletS} {
    font-size: 20px;
    line-height: 30px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroImage = styled.div`
  background-image: url("/images/templates/certificates/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 66.5625%;

  @media ${device.tabletS} {
    margin: 0 51px;
    background-position: center;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 320px;
    height: 213px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroText,
  StyledHeroImage,
};
