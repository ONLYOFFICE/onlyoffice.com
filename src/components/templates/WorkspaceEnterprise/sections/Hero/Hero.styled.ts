import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 544px 786px;
  align-items: center;

  @media ${device.desktop} {
    grid-template-columns: 484px auto;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 2fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 32px;
  }

  @media ${device.mobile} {
    gap: 0px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  justify-items: start;

  @media ${device.tabletS} {
    justify-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 492px;
  background-image: url("/images/templates/workspace-enterprise/hero/header.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  left: -180px;
  
  @media ${device.desktop} {
    left: 0;
  }

  @media ${device.tabletS} {
    max-width: 646px;
    width: 100%;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    padding-bottom: 288px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
};
