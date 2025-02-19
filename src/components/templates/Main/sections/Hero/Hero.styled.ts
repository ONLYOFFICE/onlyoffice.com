import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 932px;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 40px;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: -0.04em;

  span {
    color: #ff6f3d;
  }

  @media ${device.tabletS} {
    font-size: 48px;
    line-height: 58px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
    font-size: 30px;
    line-height: 36px;
  }
`;

const StyledHeroBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  a {
    &:first-child {
      margin-right: 16px;

      @media ${device.mobile} {
        margin: 0 0 16px;
      }
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    margin-bottom: 18px;
  }

  @media ${device.tabletS} {
    margin-bottom: 28px;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledHeroImageWrapper = styled.div`
  @media ${device.tablet} {
    margin: 0 -40px;
  }

  @media ${device.mobile} {
    margin: 0 -16px;
  }
`;

const StyledHeroImage = styled.div<{ $img?: string; $img2x?: string }>`
  position: relative;
  padding-bottom: 46.094%;
  background-repeat: no-repeat;
  background-size: contain;
  ${({ $img }) =>
    $img &&
    css`
      background-image: url(${$img});
    `}

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 120dpi),
    only screen and (min-width: 592px) {
    ${({ $img2x }) =>
      $img2x &&
      css`
        background-image: url(${$img2x});
      `}
  }

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    width: 61.094%;
    transform: translate(-50%, -50%);
  }
`;

export {
  StyledHeroWrapper,
  StyledHeroHeading,
  StyledHeroBtns,
  StyledHeroImageWrapper,
  StyledHeroImage,
};
