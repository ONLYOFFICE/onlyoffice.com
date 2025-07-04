import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 352px auto;
  align-items: center;
  gap: 16px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 48px;
  }

  @media ${device.mobile} {
    row-gap: 28px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 32px;
  color: #ffffff;
  max-width: 352px;

  @media ${device.tabletS} {
    justify-items: center;
    text-align: center;
    max-width: 100%;

    h2 {
      width: 70vw;
    }
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  letter-spacing: -0.03em;
  line-height: 1.33em;

  @media ${device.tabletS} {
    max-width: 795px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledHeroSubheading = styled(Heading)`
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledHeroImage = styled.div`
  aspect-ratio: 2.07;
  background-image: url("/images/templates/for-government/hero/hero_image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroSubheading
};
