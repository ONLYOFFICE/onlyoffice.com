import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
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
    padding-top: 48px;
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
    font-size: 36px;
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
    background-image: url("/images/templates/office-for-ios/hero/heading.svg");
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.tabletS} {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @media ${device.mobileS} {
      left: 0;
      top: 50%;
      transform: translate(-40%, -50%);
    }
  }
`;

const StyledHeroLeftButton = styled.div`
  margin-top: 40px;

  @media ${device.tabletS} {
    display: flex;
    justify-content: center;
  }

  @media ${device.mobileS} {
    margin-top: 32px;
  }
`;

const StyledHeroLeftText = styled(Text)`
  margin-top: 30px;

  @media ${device.tabletS} {
    text-align: center;
    margin: 48px 0;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }

  @media ${device.mobileS} {
    margin: 32px 0 40px;
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

const StyledHeroLeftImg = styled.div<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  width: 498px;
  height: 498px;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  margin-left: -15.625vw;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

  @media ${device.tablet} {
    margin-left: 0;
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

const StyledHeroRight = styled.div<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 800px;
  height: 735px;
  position: absolute;
  top: -135px;
  left: 55%;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

  @media ${device.tabletS} {
    position: static;
    width: 90vw;
    height: 83vw;
    margin: 0 auto;
  }
`;

const StyledHeroPhoneImgMob = styled.div<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  display: none;
  width: 498px;
  height: 498px;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1;
  transform: scale(0.75);
  margin: -40px auto 0;
  pointer-events: none;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

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

const StyledHeroFooter = styled.div`
  margin-top: -195px;

  @media ${device.tabletS} {
    margin-top: 25px;
  }

  @media ${device.mobileS} {
    margin-top: -110px;
  }
`;

const StyledHeroFooterImgLink = styled(Link)`
  display: block;
  width: 172px;
  height: 172px;
  margin: 0 auto;
  background-image: url("/images/templates/office-for-ios/hero/award.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeroFooterHeading = styled(Heading)`
  margin-top: 30px;

  @media ${device.tabletS} {
    font-size: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }

  @media ${device.mobileS} {
    margin-top: 48px;
  }
`;

const StyledHeroFooterText = styled(Text)`
  margin-top: 20px;

  @media ${device.mobile} {
    font-size: 14px;
  }

  @media ${device.mobileS} {
    margin-top: 16px;
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
  StyledHeroFooter,
  StyledHeroFooterImgLink,
  StyledHeroFooterHeading,
  StyledHeroFooterText,
};
