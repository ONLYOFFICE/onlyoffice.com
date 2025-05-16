import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  overflow: hidden;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroContainer = styled(Container)`
  padding-top: 50px;

  @media ${device.mobile} {
    padding-top: 68px;
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
  z-index: 1;
  margin-top: 90px;

  @media ${device.tabletS} {
    text-align: center;
    margin-top: 0;
    font-size: 40px;
    line-height: 133%;
  }

  @media ${device.mobile} {
    font-size: 24px;
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
    background-image: url("/images/templates/office-for-android/hero/heading.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.tabletS} {
      left: 0;
      top: 0;
    }
  }
`;

const StyledHeroLeftButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 40px;
`;

const StyledHeroLeftButtonGoogle = styled(Button)`
  display: block;
  width: 170px;
  height: 58px;
  background-image: url("/images/templates/office-for-android/hero/google-play_btn.webp");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 2;

  @media ${device.tabletS} {
    margin: 40px auto 0;
  }
`;

const StyledHeroLeftButtonAppGallery = styled(Button)`
  display: block;
  width: 170px;
  height: 58px;
  background-image: url("/images/templates/office-for-android/hero/app-gallery_btn.svg");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 2;

  @media ${device.tabletS} {
    margin: 40px auto 0;
  }
`;

const StyledHeroLeftImgWrapper = styled.div`
  width: 498px;
  height: 498px;
  position: relative;
  pointer-events: none;

  @media ${device.tabletS} {
    display: none;
  }
`;

const StyledHeroLeftImg = styled.div`
  width: 498px;
  height: 498px;
  background-image: url("/images/templates/office-for-android/hero/hero_phone.webp");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  margin-left: -15.625vw;

  @media ${device.tablet} {
    margin-left: 0;
  }

  &::before {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-android/hero/triangle_top.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 79px;
    right: 57px;
    z-index: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-android/hero/triangle_bottom.svg");
    background-repeat: no-repeat;
    position: absolute;
    left: 75px;
    bottom: 69px;
    z-index: 0;
  }
`;

const StyledHeroRight = styled.div`
  background-image: url("/images/templates/office-for-android/hero/hero_laptop.webp");
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
    margin: 0 auto;
  }
`;

const StyledHeroPhoneImgMob = styled.div`
  display: none;
  width: 498px;
  height: 498px;
  background-image: url("/images/templates/office-for-android/hero/hero_phone.webp");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1;
  transform: scale(0.75);
  margin: -40px auto 0;
  pointer-events: none;

  @media ${device.tabletS} {
    display: block;
  }

  @media ${device.mobileS} {
    transform: scale(0.5) translate(-35%, 0);
    margin: -150px auto 0;
  }

  &::before {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-android/hero/triangle_top.svg");
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
    background-image: url("/images/templates/office-for-android/hero/triangle_bottom.svg");
    background-repeat: no-repeat;
    position: absolute;
    left: 41px;
    bottom: 92px;
    z-index: 0;
  }
`;

const StyledHeroFooter = styled.div`
  max-width: 484px;
  margin: -195px auto 0;

  @media ${device.tabletS} {
    margin-top: 25px;
    margin: 25px auto 0;
  }

  @media ${device.mobileS} {
    margin: -110px auto 0;
  }
`;

const StyledHeroFooterImg = styled.div`
  width: 172px;
  height: 172px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    width: 196px;
    height: 161px;
    background-image: url("/images/templates/office-for-android/hero/quotes.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &::after {
    content: "";
    width: 104px;
    height: 64px;
    background-image: url("/images/templates/office-for-android/hero/malavida.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const StyledHeroFooterHeading = styled(Heading)`
  position: relative;
  z-index: 3;

  @media ${device.tabletS} {
    font-size: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroFooterLink = styled(Link)`
  display: block;
  width: fit-content;
  font-weight: bold;
  font-size: 13px;
  line-height: 160%;
  position: relative;
  z-index: 3;
  margin: 20px auto 0;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledHeroFooterText = styled(Text)`
  position: relative;
  z-index: 3;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftHeading,
  StyledHeroLeftButtonsWrapper,
  StyledHeroLeftButtonGoogle,
  StyledHeroLeftButtonAppGallery,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroRight,
  StyledHeroPhoneImgMob,
  StyledHeroFooter,
  StyledHeroFooterImg,
  StyledHeroFooterHeading,
  StyledHeroFooterLink,
  StyledHeroFooterText,
};
