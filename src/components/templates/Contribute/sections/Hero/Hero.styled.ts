import styled, { keyframes } from "styled-components";
import { device } from "@src/utils/device";
import { IHeroImage } from "./Hero.types";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledHeroSection = styled(Section)`
  position: relative;
  padding: 72px 0 0;
  height: 738px;

  @media ${device.tablet} {
    padding: 64px 0 0;
    height: 729px;
  }

  @media ${device.tabletS} {
    padding: 48px 0 0;
    height: 713px;
  }

  @media ${device.mobile} {
    height: auto;
  }
`;

const StyledHeroWrapper = styled.div`
  position: relative;
`;

const StyledHeroContent = styled.div`
  position: relative;
  padding: 190px 0 48px;
  max-width: 592px;
  z-index: 1;

  @media ${device.tablet} {
    padding: 146px 0 48px;
  }

  @media ${device.mobile} {
    padding: 48px 0;
    text-align: center;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 16px;
  font-size: 48px;
  line-height: 133%;

  @media ${device.tablet} {
    margin-bottom: 24px;
    font-size: 36px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    font-size: 30px;
  }
`;

const StyledHeroText = styled(Text)`
  max-width: 461px;

  @media ${device.tablet} {
    max-width: 409px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    max-width: 100%;
  }
`;

const StyledHeroIcons = styled.div`
  @media ${device.tabletS} {
    margin: 0 -16px;
    overflow: hidden;
    overflow-x: auto;
  }
`;

const StyledHeroIconsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  @media ${device.tablet} {
    position: absolute;
    width: 869px;
  }

  @media ${device.mobile} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 856px;
    height: 216px;
  }
`;

const StyledHeroIcon = styled.div<{
  $image: IHeroImage["image"]["url"];
  $type: IHeroImage["image"]["type"];
  $isVisible: IHeroImage["image"]["isVisible"];
  $positionX: IHeroImage["image"]["positionX"];
  $top: IHeroImage["top"];
  $left: IHeroImage["left"];
  $right: IHeroImage["right"];
  $animationDelay: IHeroImage["animationDelay"];
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  width: 133px;
  height: 133px;
  background-size: 133px 133px;
  background-repeat: no-repeat;
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "")};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  animation: ${fadeIn} 0.5s ${({ $animationDelay }) => $animationDelay || "0s"}
    both;
  transition:
    visibility 0.2s ease,
    opacity 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: ${({ $type }) => ($type === "icon" ? "block" : "none")};
    width: 48px;
    height: 48px;
    background-image: url("/images/templates/contribute/hero/hero_icons.png");
    background-size: auto 48px;
    background-position: ${({ $positionX }) => `${$positionX || "0px"} center`};
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }

  @media ${device.mobile} {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    width: 107px;
    height: 107px;
    background-size: 107px 107px;
  }
`;

const StyledHeroIconLink = styled(Link)`
  display: inline-block;
  width: 133px;
  height: 133px;

  @media ${device.mobile} {
    width: 107px;
    height: 107px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroIcons,
  StyledHeroIconsWrapper,
  StyledHeroIcon,
  StyledHeroIconLink,
};
