import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { IHero } from "./Hero.types";

const StyledHero = styled(Section)`
  margin-top: -72px;
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
  align-items: flex-start;
  gap: 72px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media ${device.tabletS} {
    text-align: center;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  padding-top: 30px;
  gap: 32px;

  @media ${device.tablet} {
    text-align: center;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 40px;
  letter-spacing: -0.02em;
  line-height: 1.33em;
  color: #333;

  @media ${device.tablet} {
    max-width: 700px;
    margin: 0 auto;

    span {
      display: block;
    }
  }

  @media ${device.tabletS} {
    font-size: 36px;
    letter-spacing: -0.01em;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 160%;
`;

const StyledButton = styled(Button)<{ $HeroImgUrl: string }>`
  background-color: transparent;
  background-image: url(${({ $HeroImgUrl }) => $HeroImgUrl});
  background-repeat: no-repeat;
  background-position: -12px -12px;
  background-size: 193px auto;
  margin-right: 9px;
  display: block;
  height: 51px;
  width: 170px;

  &:hover {
    background-color: transparent;
  }

  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

const StyledHeroImage = styled.div`
  background-image: url("/images/templates/projects-for-android/hero/project-head-img.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 538px;
  width: auto;

  @media ${device.tablet} {
  background-size: auto;
  max-width: 689px;
  width: 100%;
  }

  @media ${device.tabletS} {
    background-size: contain;
  }

  @media ${device.mobile} {
    background-size: 100% 100%;
    max-height: 450px;
  }

  @media ${device.mobileS} {
    max-height: 350px;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledButton,
  StyledHeroImage,
};
