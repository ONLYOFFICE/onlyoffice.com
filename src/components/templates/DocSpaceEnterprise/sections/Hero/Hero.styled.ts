import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled.section<{ $imgUrl: string }>`
  position: relative;
  z-index: 1;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: 3574px auto;
  background-position: 65% 0px;
  background-color: #f8f9f9;
  transform: translateY(-72px);

  @media ${device.tablet} {
    transform: translateY(-64px);
    background-position: 65% -50px;
  }

  @media ${device.tabletS} {
    transform: translateY(-48px);
  }
`;

const StyledHeroWrapper = styled.div`

  @media ${device.mobile} {
    width: 90vw;
    margin: 0 auto;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    text-align: center;
    padding-top: 140px;

    @media ${device.tablet} {
      padding-top: 118px;
    }

    @media ${device.tabletS} {
      font-size: 36px;
      letter-spacing: -0.02em;
      padding-top: 135px;
    }

    @media ${device.mobile} {
      font-size: 28px;
      padding-top: 96px;
    }
  }

  .subtitle {
    font-size: 18px;
    line-height: 160%;
    padding: 24px 0 32px;
    text-align: center;

    @media ${device.tabletS} {
      font-size: 16px;
      padding: 24px 0 48px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      padding: 16px 0;
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

const StyledHeroImgWrapper = styled.div`
  width: 93.75vw;
  margin: 0px auto 56px;
  overflow: hidden;

  @media screen and (max-width: 1680px) {
    width: 100%;
  }

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobile} {
    margin: 48px auto 24px;
  }

  img {
    width: 100%;
    height: fit-content;

    @media ${device.tabletS} {
      width: 140%;
    }

    @media ${device.mobile} {
      width: 145%;
    }
  }
`;

const StyledHeroWorldwide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 56px 0 112px;

  @media ${device.mobile} {
    font-size: 14px;
    padding: 50px 0 40px;
    padding: 45px 0 40px;
  }

  @media ${device.mobileS} {
    padding: 45px 0 38px;
  }

  .orangetext {
    color: #ff6f3d;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.8px;
    font-weight: 800;

    @media ${device.mobile} {
      font-size: 20px;
    }
  }
`;

const StyledHeroWorldwideImgWrapper = styled.div`
  width: 64px;
  height: 52px;
  margin-bottom: 24px;

  @media ${device.mobile} {
    width: 49px;
    height: 40px;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroBtnWrapper,
  StyledHeroImgWrapper,
  StyledHeroWorldwide,
  StyledHeroWorldwideImgWrapper,
};
