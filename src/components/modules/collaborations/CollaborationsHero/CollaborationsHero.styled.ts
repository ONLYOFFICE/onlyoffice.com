import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";
import { ICollaborationsHero } from "./CollaborationsHero.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCollaborationsHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/document-management/hero/clouds.svg')});
  background-position: calc(50% + 290px) 100px;
  background-repeat: no-repeat;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% + 336px) 100px;
  }

  @media ${device.mobile} {
    background-position: calc(50% + 175px) 40px;
  }
`;

const StyledCollaborationsHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  gap: 32px;
  align-items: center;
  position: relative;

  @media ${device.desktop} {
    grid-template-columns: 1fr;
    gap: 98px;
    justify-items: center;
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledCollaborationsHeroContent = styled.div`
  display: grid;
  gap: 32px;
  justify-items: start;

  @media ${device.desktop} {
    max-width: 632px;
    justify-items: center;
    text-align: center;
  }
`;

const StyledCollaborationsHeroHeading = styled(Heading)`
  letter-spacing: -0.03em;

  @media ${device.desktop} {
    max-width: 100%;
    letter-spacing: -0.01em;
  }
`;

const StyledCollaborationsHeroText = styled(Text)`
  font-size: 18px;
  line-height: 29px;

  span {
    font-size: 14px;
    line-height: 19px;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }
`;

const StyledCollaborationsHeroImage = styled.div<{
  $image: string;
  $image2x: string;
  $type: ICollaborationsHero["image"]["type"];
}>`
  padding-bottom: ${(props) => (props.$type === "img" ? "62%" : "56.15%")};
  width: 100%;
  border: ${(props) => (props.$type === "img" ? "none" : "10px solid #ffffff")};
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  cursor: ${({ $type }) => ($type === "video" ? "pointer" : "default")};

  @media ${device.retina} {
    background-image: url(${(props) => props.$image2x});
  }

  &::before {
    ${({ $type }) =>
      $type === "video"
        ? css`
            content: "";
            background: rgba(0, 0, 0, 0.6);
            border-radius: 50%;
            height: 100px;
            width: 100px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.5;
          `
        : css`
            content: none;
          `}
  }

  &::after {
    ${({ $type }) =>
      $type === "video"
        ? css`
            content: "";
            border-top: 12px solid transparent;
            border-left: 22px solid white;
            border-bottom: 12px solid transparent;
            position: absolute;
            left: 50.5%;
            top: 50%;
            transform: translate(-50%, -50%);
          `
        : css`
            content: none;
          `}
  }
`;

const StyledCollaborationsHeroVideoImage = styled.div<{
  $image: string;
  $image2x: string;
}>`
  padding-bottom: 56.15%;
  width: 100%;
  border: 10px solid #ffffff;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;

  @media ${device.retina} {
    background-image: url(${(props) => props.$image2x});
  }

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    position: absolute;
    width: 100px;
  }

  &::after {
    content: "";
    border-top: 12px solid transparent;
    border-left: 22px solid white;
    border-bottom: 12px solid transparent;
    color: #ffffff;
    left: 50.5%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

const StyledCollaborationsHeroMedalsWrapper = styled.div`
  position: absolute;
  bottom: -187.5px;
  left: 0;
  height: 111px;
  display: flex;
  align-items: center;
  gap: 32px;

  @media ${device.desktop} {
    right: 0;
    justify-content: center;
  }

  @media ${device.tabletS} {
    bottom: -178.5px;
  }

  @media ${device.mobile} {
    height: 70px;
    bottom: -84.5px;
  }
`;

const StyledCollaborationsHeroMedal = styled(Link)<{
  $logo: string;
  $width: string;
  $height: string;
  $mobileWidth: string;
  $mobileHeight: string;
  $hasHref: boolean;
}>`
  background-image: url(${({ $logo }) => $logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  pointer-events: ${({ $hasHref }) => ($hasHref ? "auto" : "none")};
  cursor: ${({ $hasHref }) => ($hasHref ? "pointer" : "default")};

  @media ${device.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth};
    height: ${({ $mobileHeight }) => $mobileHeight};
  }
`;

const StyledWatchVideoModal = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export {
  StyledCollaborationsHeroSection,
  StyledCollaborationsHeroWrapper,
  StyledCollaborationsHeroContent,
  StyledCollaborationsHeroImage,
  StyledCollaborationsHeroVideoImage,
  StyledCollaborationsHeroHeading,
  StyledCollaborationsHeroText,
  StyledCollaborationsHeroMedalsWrapper,
  StyledCollaborationsHeroMedal,
  StyledWatchVideoModal,
};
