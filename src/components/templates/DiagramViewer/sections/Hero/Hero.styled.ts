import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

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

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroNoWrapText,
  StyledHeroSubHeading,
  StyledHeroButtonWrapper,
  StyledHeroImageWrapper,
  StyledHeroImage
};
