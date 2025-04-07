import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/office-for-educators/hero/bg.svg");
  background-position: center -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% + 140px) -564px;
  }

  @media ${device.mobile} {
    background-position: calc(50% + 360px) -660px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  align-items: center;
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 56px;
    text-align: center;
  }

  @media ${device.mobile} {
    row-gap: 48px;
    text-align: initial;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;

  @media ${device.tabletS} {
    gap: 32px;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 56px;
  line-height: 62px;

  @media ${device.tabletS} {
    font-size: 44px;
    line-height: 59px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;
  line-height: 150%;

  @media ${device.tabletS} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 110.938%;
  background-image: url("/images/templates/office-for-educators/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 448px;
    height: 496px;
    margin: 0 auto;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 310px;
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
