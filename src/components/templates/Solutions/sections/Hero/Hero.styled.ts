import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/solutions/hero/bg.svg')});
  background-repeat: no-repeat;
  background-size: 2464px auto;
  background-position-y: 0;
  background-position-x: 83%;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px 710px;
  gap: 0px;
  align-items: center;

  @media ${device.desktop} {
    grid-template-columns: 448px auto;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 32px;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 448px;
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
  padding-bottom: 100%;
  background-image: url(${getAssetUrl('/images/templates/solutions/hero/main.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.tabletS} {
    max-width: 688px;
    width: 100%;
    margin: 0 auto;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
  StyledButtonWrapper,
};
