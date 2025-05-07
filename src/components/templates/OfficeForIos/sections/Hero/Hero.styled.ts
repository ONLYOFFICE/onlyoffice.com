import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  overflow: hidden;
`;

const StyledHeroContainer = styled(Container)`
  padding-top: 50px;

  @media ${device.tabletS} {
    padding-top: 88px;
  }
`;

const StyledHeroWrapper = styled.div`
  position: relative;

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
  }
`;

const StyledHeroLeft = styled.div`
  max-width: 500px;

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const StyledHeroLeftHeading = styled(Heading)`
  position: relative;
  z-index: 10;
  margin-top: 90px;

  @media ${device.tabletS} {
    text-align: center;
    margin-top: 0;
    font-size: 40px;
    line-height: 133%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 189px;
    height: 155px;
    left: -100px;
    top: -120px;
    background-image: url("/images/templates/office-for-ios/hero/heading.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.tabletS} {
      left: 0;
      top: 0;
    }
  }
`;

const StyledHeroLeftButton = styled(Button)`
  display: block;
  width: 170px;
  height: 58px;
  margin-top: 40px;
  background-image: url("/images/templates/office-for-ios/hero/app-store_btn.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    margin: 40px auto 0;
  }
`;

const StyledHeroLeftText = styled(Text)`
  margin-top: 30px;

  @media ${device.tabletS} {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const StyledHeroLeftImgWrapper = styled.div`
  width: 498px;
  height: 498px;
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledHeroLeftImg = styled.div`
  width: 498px;
  height: 498px;
  background-image: url("/images/templates/office-for-ios/hero/hero_phone.webp");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  margin-left: -15.625vw;

  &::before {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_top.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 81px;
    right: 126px;
    z-index: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_bottom.svg");
    background-repeat: no-repeat;
    position: absolute;
    left: 41px;
    bottom: 92px;
    z-index: 0;
  }
`;

const StyledHeroRight = styled.div`
  background-image: url("/images/templates/office-for-ios/hero/hero_laptop.webp");
  background-repeat: no-repeat;
  background-size: contain;
  width: 800px;
  height: 735px;
  position: absolute;
  top: -135px;
  left: 55%;

  @media ${device.tabletS} {
    position: static;
    width: 90vw;
    height: 83vw;
  }
`;

const StyledHeroPhoneImgMob = styled.div`
  display: none;
  width: 498px;
  height: 498px;
  background-image: url("/images/templates/office-for-ios/hero/hero_phone.webp");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1;
  transform: scale(0.75);
  margin: -40px auto 0;

  @media ${device.tabletS} {
    display: block;
  }

  &::before {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_top.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 81px;
    right: 126px;
    z-index: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_bottom.svg");
    background-repeat: no-repeat;
    position: absolute;
    left: 41px;
    bottom: 92px;
    z-index: 0;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftHeading,
  StyledHeroLeftButton,
  StyledHeroLeftText,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroRight,
  StyledHeroPhoneImgMob,
};
