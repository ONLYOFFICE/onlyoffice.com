import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IHero } from "./Hero.types";

const StyledHero = styled(Section)`
  background-color: #333333;
  margin-top: -72px;
  position: relative;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media ${device.desktop} {
    flex-direction: column;
    row-gap: 16px;
  }

  @media ${device.tabletS} {
    row-gap: 16px;
    text-align: center;
  }

  @media ${device.mobile} {
    row-gap: 48px;
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  gap: 32px;
  margin-bottom: 55px;
  padding-top: 0;

  @media ${device.desktop} {
    margin-bottom: 0;
    text-align: center;
    width: 90vw;
  }

  @media ${device.tabletS} {
    gap: 32px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  color: #fff;
  font-size: 40px;
  letter-spacing: -0.02em;
  line-height: 1.33em;

  @media ${device.tabletS} {
    font-size: 36px;
    letter-spacing: -0.01em;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroText = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 1.6em;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 16px;
`;

const StyledButton = styled.div`
  display: block;

  @media ${device.desktop} {
    margin: 0 auto;
  }
`;

const StyledHeroImage = styled.div<{
  $imgUrl: IHero["imgUrl"];
  $imgWidth: IHero["imgWidth"];
  $imgHeight: IHero["imgHeight"];
}>`
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-grow: 1;
  height: 538px;
  margin-left: -90px;
  width: 689px;

  @media ${device.desktop} {
    background-size: contain;
    margin-left: 0;
    width: 58vw;
  }

  @media ${device.tablet} {
    height: 45vw;
  }

  @media ${device.tabletS} {
    margin: 0 auto;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledButton,
  StyledText,
  StyledHeroImage,
};
