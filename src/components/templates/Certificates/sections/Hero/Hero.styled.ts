import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  background-image: url("/images/templates/certificates/hero/orange-line.svg");
  background-repeat: no-repeat;
  background-position: center 141px;

  @media ${device.tabletS} {
    background-image: none;
  }
`;

const StyledHeroContainer = styled(Container)`
  max-width: 1280px;
  padding: 0;
`;

const StyledHeroWrapper = styled.div`
  background-color: #f5f5f5;
  background-image: url("/images/templates/certificates/hero/gray-line.svg");
  background-repeat: no-repeat;
  background-position: center calc(50% - 7px);
  display: grid;
  grid-template-columns: 448px auto;
  gap: 32px;
  align-items: center;
  padding: 24px 80px 30px;

  @media ${device.desktop} {
    grid-template-columns: 304px auto;
    padding: 24px 0 30px 48px;
  }

  @media ${device.tabletS} {
    background-size: auto 223px;
    background-position-y: 65px;
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0;
  }

  @media ${device.mobile} {
    background-size: auto 153px;
    background-position-y: 112.5px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  text-align: start;

  @media ${device.tablet} {
    padding: 84.5px 0;
  }

  @media ${device.tabletS} {
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 48px 16px 24px;
  }
`;

const StyledHeroText = styled(Text)`
  font-size: 22px;
  line-height: 33px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.tabletS} {
    font-size: 20px;
    line-height: 30px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroImage = styled.div`
  background-image: url("/images/templates/certificates/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 66.5625%;

  @media ${device.tabletS} {
    margin: 0 51px;
    background-position: center;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 320px;
    height: 213px;
  }
`;

const  StyledCertificateCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 32px;
  margin: 140px 0 112px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
    margin: 110px 0 112px;
  }

  @media ${device.tabletS} {
    padding: 16px;
    margin: 80px 0;
  }

  @media ${device.mobile} {
    gap: 48px;
    padding: 8px;
    margin: 48px 0;
  }
`;

const  StyledUsersWorldwideWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 39px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;

  &::before {
    content: "";
    width: 143px;
    height: 25px;
    position: absolute;
    right: 30px;
    bottom: -12.5px;
    background-image: url("/images/templates/certificates/users/line.svg");
    background-repeat: no-repeat;
    background-size: 143px 25px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    padding-bottom: 56px;
    justify-items: center;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${device.mobile} {
    padding: 32px 24px 40px;
  }
`;

const  StyledUsersWorldwideContent = styled.div`
  display: grid;
  grid-template-columns: 74px auto;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const  StyledUsersWorldwideImage = styled.div`
  width: 74px;
  height: 74px;
  background-image: url("/images/templates/certificates/users/world.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const  StyledUsersWorldwideText = styled(Heading)`
  max-width: 533px;
  font-size: 28px;
  line-height: 31px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroText,
  StyledHeroImage,
  StyledCertificateCardsWrapper,
  StyledUsersWorldwideWrapper,
  StyledUsersWorldwideContent,
  StyledUsersWorldwideImage,
  StyledUsersWorldwideText,
};
