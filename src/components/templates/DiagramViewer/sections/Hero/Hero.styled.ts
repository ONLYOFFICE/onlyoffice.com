import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { YouTubeCard } from "@src/components/modules/docspace/YouTubeCard";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -48px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 1.33em;

  @media ${device.tabletS} {
    font-size: 40px;
  }

  @media ${device.mobile} {
    font-size: 30px;
  }
`;

const StyledHeroSubHeading = styled(Heading)`
  font-weight: normal;
  margin-bottom: 40px;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

const StyledHeroNoWrapText = styled(Text)`
  white-space: nowrap;
`;

const StyledHeroButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledHeroImageWrapper = styled.div`
  margin-top: 80px;

  @media ${device.desktop} {
    height: 51vw;
  }

  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

const StyledHeroImage = styled.div<{
  $imageUrl: string;
  $imageUrl2x: string;
}>`
  width: 1000px;
  height: 640px;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: 1000px auto;
  background-position: 0 0;
  background-repeat: no-repeat;
  margin: 0 auto;

  @media ${device.retina} {
    background-image: url(${({ $imageUrl2x }) => $imageUrl2x});
  }

  @media ${device.desktop} {
    background-size: cover;
    height: 48vw;
    width: 90vw;
  }
`;

const StyledHeroYouTubeWrapper = styled.div`
  width: 1000px;
  height: 560px;
  margin: 80px auto 0;
  padding-bottom: 112px;
  box-sizing: content-box;

  @media ${device.desktop} {
    width: 700px;
    height: 392px;
  }

  @media ${device.tabletS} {
    width: 100%;
    height: 100%;
    margin: 56px auto 0;
    padding-bottom: 72px;
  }

  @media ${device.mobile} {
    padding-bottom: 8px;
  }

  & > div {
    width: 100%;
    height: 100%;
    border: none;
  }

  & > div > div:first-child {
    width: 100%;
    height: 100%;
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
    transition-property: box-shadow;
    transition-duration: 0.3s;
    box-sizing: border-box;
    background-size: cover;
  }

  &:hover > div > div:first-child {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledYouTubeCard = styled(YouTubeCard)`
  width: 100%;
  height: 100%;
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroNoWrapText,
  StyledHeroSubHeading,
  StyledHeroButtonWrapper,
  StyledHeroImageWrapper,
  StyledHeroImage,
  StyledHeroYouTubeWrapper,
  StyledYouTubeCard
};
