import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IHero } from "./Hero.types";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/public-rooms/hero/bg.svg");
  background-position: 37% -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 26% -564px;
  }

  @media ${device.mobile} {
    background-position: 24% -690px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  align-items: center;
  gap: 72px;

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
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  @media ${device.tabletS} {
    max-width: 100%;
    gap: 32px;
    align-items: center;
  }

  @media ${device.mobile} {
    gap: 16px;
    align-items: start;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 56px;
  letter-spacing: -0.02em;
  line-height: 133%;

  @media ${device.tabletS} {
    font-size: 44px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;
  line-height: 150%;
  color: #444;

  @media ${device.tabletS} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledHeroImage = styled.div<{
  $imgUrl: IHero["imgUrl"];
  $imgWidth: IHero["imgWidth"];
  $imgHeight: IHero["imgHeight"];
}>`
  padding-bottom: ${({ $imgHeight, $imgWidth }) =>
    $imgHeight && $imgWidth
      ? (($imgHeight / $imgWidth) * 100).toFixed(4) + "%"
      : "0%"};
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.tabletS} {
    max-width: 488px;
    width: 100%;
    margin: 0 auto;
    height: ${({ $imgHeight, $imgWidth }) =>
      $imgHeight && $imgWidth
        ? ((488 * $imgHeight) / $imgWidth).toFixed(2) + "px"
        : "0px"};
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    max-width: 100%;
    height: auto;
    padding-bottom: ${({ $imgHeight, $imgWidth }) =>
      $imgHeight && $imgWidth
        ? (($imgHeight / $imgWidth) * 100).toFixed(4) + "%"
        : "0%"};
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
