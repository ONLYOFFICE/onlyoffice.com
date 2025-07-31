import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroSection = styled(Section)`
  background-image: url("/images/templates/certificates/hero/orange-line.svg");
  background-repeat: no-repeat;
  background-position: center 141px;

  @media ${device.tabletS} {
    background-image: none;
  }
`;

const StyledHeroContainer = styled(Container)`
  padding: 0;
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 448px auto;
  column-gap: 32px;
  border-radius: 6px;
  padding: 24px 80px 30px;
  min-height: 480px;
  background-color: #f5f5f5;
  background-image: url("/images/templates/certificates/hero/gray-line.svg");
  background-repeat: no-repeat;
  background-position: center calc(50% - 7px);

  @media ${device.desktop} {
    padding: 24px 48px 30px;
  }

  @media ${device.tablet} {
    grid-template-columns: 304px auto;
    padding: 24px 0 24px 48px;
  }

  @media ${device.tabletS} {
    grid-template-columns: initial;
    padding: 84px 0 0;
    min-height: initial;
    background-size: auto 223px;
    background-position-y: 65px;
  }

  @media ${device.mobile} {
    padding: 48px 0 37px;
    background-size: auto 153px;
    background-position-y: 112.5px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  row-gap: 24px;

  @media ${device.tabletS} {
    row-gap: 16px;
    margin-bottom: 62px;
    padding: 0 40px;
    text-align: center;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
    padding: 0 16px;
  }
`;

const StyledHeroHeading = styled(Heading)<{ $locale?: string }>`
  max-width: ${({ $locale }) =>
    $locale === "ja" || $locale === "zh" ? "303px" : "100%"};
  line-height: 53px;

  @media ${device.tabletS} {
    max-width: 100%;
    line-height: 60px;
  }

  @media ${device.mobile} {
    line-height: 32px;
  }
`;

const StyledHeroText = styled(Text)<{ $locale?: string }>`
  max-width: ${({ $locale }) =>
    $locale === "ja" || $locale === "zh"
      ? "303px"
      : $locale === "sr"
        ? "330px"
        : "392px"};
  font-size: 22px;
  line-height: 33px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.tabletS} {
    max-width: 392px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 30px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 66.5625%;
  background-image: url("/images/templates/certificates/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    padding-bottom: 62.5%;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    padding-bottom: 0;
    max-width: 320px;
    width: 100%;
    height: 213px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroImage,
};
