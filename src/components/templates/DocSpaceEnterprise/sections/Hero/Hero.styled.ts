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
    background-position: 65% -50px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
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
    font-size: 18px;
    line-height: 160%;
    margin: 24px 0 32px;
    text-align: center;

    @media ${device.tabletS} {
      font-size: 16px;
    }

    @media ${device.mobile} {
      font-size: 14px;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  height: 576px;

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
