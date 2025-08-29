import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const StyledHeroSection = styled(Section)<{
  $locale: string;
}>`
  background-image: ${({ $locale }) => $locale === "zh" ? "" : "url(/images/templates/about/hero/hero-img.svg)"};
  background-repeat: no-repeat;
  background-position-y: 47%;
  background-position-x: calc(50% + 260px);

  @media ${device.tablet} {
    background-position-x: calc(50% + 210px);
    background-size: 60%;
  }

  @media ${device.tabletS} {
    background-position: 50%;
    background-size: 80%;
  }

  @media ${device.mobile} {
    background-position: 50% 55%;
    background-size: 75%;
  }
`;

const StyledHeroHeading = styled(Heading)`
  max-width: 450px;
  margin-bottom: 40px;

  @media ${device.tabletS} {
    max-width: 100%;
    text-align: center;
    font-size: 30px;
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const StyledHeroText = styled(Text)`
  max-width: 356px;
  margin-bottom: 158px;

  @media ${device.tabletS} {
    max-width: 100%;
    text-align: center;
    margin-bottom: 450px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    margin-bottom: 350px;
  }

  @media (max-width: 476px) {
    margin-bottom: 250px;
  }
`;

const StyledHeroQuotesText = styled(Text)`
  position: relative;
  margin-bottom: 24px;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 51px);
    top: -25px;
    display: block;
    width: 102px;
    height: 84px;
    background-image: url("/images/templates/about/hero/quotes.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: -1;
  }
`;

const StyledHeroQuotesTitle = styled(Heading)`
  font-size: 15px;
  font-weight: 600;
  color: #525252;
  line-height: 100%;
  position: relative;
  z-index: 3;
  margin-bottom: 10px;
`;

const StyledHeroQuotesSubtitle = styled(Text)`
  font-size: 13px;
  line-height: 160%;
  color: #AAAAAA;
  position: relative;
  z-index: 3;
`;

const StyledHeroWrapperZh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 80px;

  ${StyledHeroText} {
    margin-bottom: 0;
  }

  @media ${device.tabletS} {
    flex-direction: column;

    ${StyledHeroHeading} {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
`;

const StyledHeroContent = styled.div``;

const StyledHeroVideoWrapper = styled.div`
  width: 640px;
  aspect-ratio: 1.78;

  @media ${device.tabletS} {
    width: 100%;
  }
`;

const StyledHeroVideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroQuotesText,
  StyledHeroQuotesTitle,
  StyledHeroQuotesSubtitle,
  StyledHeroWrapperZh,
  StyledHeroContent,
  StyledHeroVideoWrapper,
  StyledHeroVideoIframe
}