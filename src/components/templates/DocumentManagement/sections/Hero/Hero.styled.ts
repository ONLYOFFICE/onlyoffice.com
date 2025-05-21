import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/document-management/hero/clouds.svg");
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

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 431px auto;
  gap: 48px;
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

const StyledHeroContent = styled.div`
  display: grid;
  gap: 32px;
  justify-items: start;

  @media ${device.desktop} {
    max-width: 632px;
    justify-items: center;
    text-align: center;
  }
`;

const StyledHeroHeading = styled(Heading)`
  max-width: 350px;
  letter-spacing: -0.03em;

  @media ${device.desktop} {
    max-width: 100%;
    letter-spacing: -0.01em;
  }
`;

const StyledHeroText = styled(Text)`
  max-width: 350px;
  font-size: 18px;
  line-height: 29px;

  @media ${device.desktop} {
    max-width: 100%;
  }
`;

const StyledHeroImage = styled.div<{ $image: string; $image2x: string }>`
  padding-bottom: 62%;
  width: 100%;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.retina} {
    background-image: url(${(props) => props.$image2x});
  }
`;

const StyledHeroMedalsWrapper = styled.div`
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

const StyledHeroMedal = styled(Link)<{
  $logo: string;
  $width: string;
  $height: string;
  $mobileWidth: string;
  $mobileHeight: string;
}>`
  background-image: url(${({ $logo }) => $logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  @media ${device.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth};
    height: ${({ $mobileHeight }) => $mobileHeight};
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroMedalsWrapper,
  StyledHeroMedal,
};
