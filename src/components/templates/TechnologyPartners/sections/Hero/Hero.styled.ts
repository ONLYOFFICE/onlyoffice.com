import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IHero } from "./Hero.types";
import { Container } from "@src/components/ui/Container";

const StyledContainer = styled(Container)`
  padding: 0 26px;

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledHeroWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 72px;

  @media ${device.desktop} {
    row-gap: 16px;
    gap: 0;
  }

  @media ${device.tablet} {
    align-items: flex-start;
  }

  @media ${device.tabletS} {
    row-gap: 16px;
    text-align: center;
  }

  @media ${device.mobile} {
    flex-direction: column;
    row-gap: 43px;
  }

  @media ${device.mobileS} {
    flex-direction: column;
    row-gap: 28px;
  }
`;

const StyledHeroContent = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 23px;
  padding-top: 0;
  width: 436px;

  @media ${device.desktop} {
    text-align: left;
    width: 418px;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    text-align: center;
    width: 90vw;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 1.33em;

  @media ${device.tablet} {
    font-size: 36px;
    letter-spacing: -0.01em;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const StyledButton = styled.div`
  display: block;
`;

const StyledHeroImage = styled.div<{
  $imgUrl: IHero["imgUrl"];
  $imgWidth: IHero["imgWidth"];
  $imgHeight: IHero["imgHeight"];
}>`
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-grow: 1;
  height: ${({ $imgHeight }) => `${$imgHeight}px`};
  margin-left: -90px;
  width: ${({ $imgWidth }) => `${$imgWidth}px`};

  @media ${device.desktop} {
    background-size: contain;
    margin-left: 0;
    width: 35vw;
  }

  @media ${device.tablet} {
    height: 33vw;
  }

  @media ${device.tabletS} {
    width: 46vw;
  }

  @media ${device.mobile} {
    height: 69vw;
    width: 90vw;
  }
`;

export {
  StyledContainer,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledButton,
  StyledText,
  StyledHeroImage,
};
