import styled, { keyframes } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { IHeroImage } from "./Hero.types";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;
  height: 738px;
  padding: 72px 0 0;
  position: relative;

  @media ${device.tablet} {
    height: 729px;
    margin-top: -64px;
    padding: 64px 0 0;
  }

  @media ${device.tabletS} {
    height: 713px;
    margin-top: -48px;
    padding: 48px 0 0;
  }

  @media ${device.mobile} {
    height: auto;
  }
`;

const StyledScroll = styled.div`
  @media ${device.tabletS} {
    overflow: hidden;
    overflow-x: auto;
    margin: 0 -16px;
    padding-left: 16px;
  }
`;

const StyledHeroImages = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

  @media ${device.tablet} {
    position: absolute;
    width: 869px;
  }

  @media ${device.mobile} {
    position: relative;
    width: 856px;
    max-height: 216px;
    margin-left: -16px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 33px;
  }
`;

const StyledHeroContent = styled.div`
  padding-top: 190px;
  position: relative;

  @media ${device.tablet} {
    padding-top: 146px;
  }

  @media ${device.mobile} {
    text-align: center;
    padding-top: 57px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  font-size: 48px;
  line-height: 133%;
  margin-bottom: 16px;

  @media ${device.tablet} {
    font-size: 36px;
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    font-size: 30px;
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  max-width: 461px;

  @media ${device.tablet} {
    max-width: 409px;
  }

  @media ${device.mobile} {
    max-width: 100%;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledHeroImage = styled.div<{
  $image: IHeroImage["image"]["url"];
  $type: IHeroImage["image"]["type"];
  $isVisible: IHeroImage["image"]["isVisible"];
  $positionX: IHeroImage["image"]["positionX"];
  $top: IHeroImage["top"];
  $left: IHeroImage["left"];
  $right: IHeroImage["right"];
  $animationDelay: IHeroImage["animationDelay"];
}>`
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  position: absolute;
  width: 133px;
  height: 133px;
  background-size: 133px 133px;
  background-repeat: no-repeat;
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "")};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  animation: ${fadeIn} 0.5s ${({ $animationDelay }) => $animationDelay || "0s"}
    both;
  transition: visibility 0.2s ease, opacity 0.2s ease;

  &::before {
    content: "";
    display: ${({ $type }) => ($type === "icon" ? "block" : "none")};
    position: absolute;
    width: 48px;
    height: 48px;
    background-image: url("/images/templates/contribute/hero/hero_icons.png");
    background-size: auto 48px;
    background-position: ${({ $positionX }) => `${$positionX || "0px"} center`};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }

  @media ${device.mobile} {
    width: 107px;
    height: 107px;
    background-size: 107px 107px;
    top: auto;
    left: auto;
    right: auto;
    position: relative;
  }
`;

export {
  StyledHeroSection,
  StyledHeroImages,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
  StyledScroll,
};
