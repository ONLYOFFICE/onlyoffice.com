import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledExperienceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  @media ${device.tablet} {
    width: 90vw;
    margin: 0 auto;
    gap: 3vw;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const StyledExperienceLeft = styled.div`
  width: 544px;

  @media ${device.mobile} {
    width: 90vw;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    padding: 0 0 24px;

    @media ${device.tabletS} {
      font-size: 20px;
      letter-spacing: -0.01em;
    }

    @media ${device.mobile} {
      text-align: center;
      font-size: 18px;
    }
  }

  .text {
    font-size: 16px;
    line-height: 150%;
    padding-bottom: 40px;

    @media ${device.tabletS} {
      font-size: 14px;
      padding-bottom: 24px;
    }
  }

  .subtitle {
    font-size: 14px;
    line-height: 150%;
    position: relative;

    @media ${device.tabletS} {
      font-size: 12px;
    }
  }
`;

const StyledExperienceSubtitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  border-top: 1px solid #666666;
  padding-top: 24px;
  position: relative;

  @media ${device.tabletS} {
    padding-top: 12px;
    gap: 8px;
  }

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    background-image: url("/images/icons/wifi-offline.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media ${device.tablet} {
      transform: translateY(-7px);
    }

    @media ${device.mobileS} {
      transform: translateY(-9px);
    }
  }
`;

const StyledExperienceRight = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
  StyledExperienceWrapper,
  StyledExperienceLeft,
  StyledExperienceSubtitleWrapper,
  StyledExperienceRight,
};
