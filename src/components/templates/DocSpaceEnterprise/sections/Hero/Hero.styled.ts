import { device } from "@src/utils/device";
import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const StyledHero = styled(Section)`
  position: relative;
  z-index: 1;
  background-image: url("/images/templates/docspace-enterprise/hero/bg.svg");
  background-repeat: no-repeat;
  background-size: 3574px auto;
  background-position: 65% 0px;
  background-color: #f8f9f9;
  margin-top: -72px;
  padding-bottom: 0;

  @media ${device.tablet} {
    margin-top: -64px;
    background-image: url("/images/templates/docspace-enterprise/hero/bg_mob.svg");
    background-size: 3030px auto;
    background-position: 53% 97%;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }

  @media ${device.mobileS} {
    background-position: 54.3% 86%;
  }
`;

const StyledHeroContainer = styled(Container)`
  h1 {
    @media ${device.tablet} {
      font-size: 36px;
      line-height: 133%;
    }

    @media ${device.tabletS} {
      font-size: 28px;
      line-height: 133%;
    }

    @media ${device.mobileS} {
      max-width: 300px;
      margin: 0 auto;
    }
  }

  p {
    margin: 24px 0 32px;

    @media ${device.mobile} {
      margin: 24px 0;
    }
  }
`;

const StyledHeroBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledHeroImgWrapper = styled.div<{ $imageUrl: string }>`
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  height: 628px;

  @media screen and (max-width: 1920px) {
    background-size: cover;
  }

  @media ${device.tablet} {
    height: 380px;
    background-position-x: 56%;
  }

  @media ${device.tabletS} {
    height: 50vw;
  }
`;

export {
  StyledHero,
  StyledHeroContainer,
  StyledHeroBtnWrapper,
  StyledHeroImgWrapper,
};
