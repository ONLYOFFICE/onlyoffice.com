import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
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
  grid-template-columns: 484px auto;
  gap: 20px;
  align-items: center;

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
  max-width: 523px;
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
  background-image: url(${getAssetUrl('/images/templates/workspace/hero/header_circle_icons.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.tabletS} {
    max-width: 646px;
    width: 100%;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 288px;
    padding: 0;
  }
`;

const StyledHeroButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroButtons,
};
