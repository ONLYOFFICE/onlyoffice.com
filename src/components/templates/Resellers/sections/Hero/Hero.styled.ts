import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 525px auto;
  align-items: center;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: initial;
    row-gap: 64px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledHeroContent = styled.div`
  @media ${device.tabletS} {
    margin: 0 auto;
    max-width: 608px;
    text-align: center;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 30px;
  max-width: 448px;

  @media ${device.tabletS} {
    margin-bottom: 40px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 75%;
  background-image: url(${getAssetUrl('/images/templates/resellers/hero/hero-image.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 480px;
    height: 322px;
    margin: 0 auto;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 209px;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
};
