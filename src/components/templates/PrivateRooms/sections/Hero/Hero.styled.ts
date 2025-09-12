import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/private-rooms/hero/head-bg.svg')});
  background-repeat: no-repeat;
  background-position: calc(50% + 200px) 20px;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    background-position-y: 90px;
  }

  @media ${device.tabletS} {
    background-position: center 45%;
    background-size: 100% auto;
  }

  @media ${device.mobile} {
    background-position: center 60%;
    background-size: 450px auto;
  }

  @media ${device.mobileS} {
    background-position: center 65%;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  align-items: center;
  gap: 72px;
  padding-top: 30px;

  @media ${device.desktop} {
    gap: 0;
  }

  @media ${device.tablet} {
    grid-template-columns: 360px auto;
    padding-top: 20px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 0;
    text-align: center;
  }

  @media ${device.mobile} {
    row-gap: 88px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 20px;

  @media ${device.tabletS} {
    gap: 32px;
    margin-bottom: 0;
  }

  @media ${device.tabletS} {
    gap: 24px;
    margin-bottom: 0;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 40px;
  line-height: 1.33em;

  @media ${device.tabletS} {
    font-size: 36px;
    margin: 0 auto;
    width: 75%;
  }

  @media ${device.mobile} {
    font-size: 24px;
    width: 100%;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;

  @media ${device.tabletS} {
    margin: 0 auto;
    width: 56%;
  }

  @media ${device.mobile} {
    font-size: 16px;
    width: 100%;
  }
`;

const StyledHeroImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/private-rooms/hero/head-pic.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  height: 329px;
  width: auto;

  @media ${device.tabletS} {
    background-position: center bottom;
    background-size: 80% auto;
  }

  @media ${device.mobile} {
    background-size: 290px auto;
    background-position: center;
    height: 169px;

  }
`

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
};
