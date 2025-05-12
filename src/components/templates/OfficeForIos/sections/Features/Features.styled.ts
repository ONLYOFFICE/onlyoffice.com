import styled from "styled-components";
import { device } from "@src/utils/device";
import { IFeaturesItem } from "./Features.types";

const StyledFeaturesWrapper = styled.div`
  display: flex;
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledFeaturesAside = styled.aside`
  width: 56.77vw;
  height: 40.83vw;
  box-sizing: content-box;
  position: sticky;
  top: calc(10vh + 36px);
  left: 0;

  @media ${device.tablet} {
    position: relative;
    width: 100%;
    height: 48.82vw;
    top: 0;
  }
`;

const StyledFeaturesAsideTablet = styled.div`
  background-image: url("/images/templates/office-for-ios/features/tablet.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  @media ${device.tablet} {
    width: 65vw;
    height: 50vw;
  }
`;

const StyledFeaturesAsideTabletImg = styled.div<{
  $bgUrlTablet: IFeaturesItem["bgUrlTablet"];
  $zIndex: IFeaturesItem["zIndex"];
}>`
  background-image: ${(props) => `url(${props.$bgUrlTablet})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 35.41vw;
  height: 26.56vw;
  position: absolute;
  top: 48%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.$zIndex};

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    left: 47%;
    top: 48%;
    transform: translate(-50%, -50%) scale(0.65);
  }
`;

const StyledFeaturesAsideMobile = styled.div`
  background-image: url("/images/templates/office-for-ios/features/mobile.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 40%;
  height: 75%;
  position: absolute;
  top: 16%;
  right: 0;
  z-index: 11;

  @media ${device.tablet} {
    width: 40vw;
    height: 50vw;
    top: 0;
  }
`;

const StyledFeaturesAsideMobileImg = styled.div<{
  $bgUrlMobile: IFeaturesItem["bgUrlMobile"];
  $zIndex: IFeaturesItem["zIndex"];
}>`
  background-image: ${(props) => `url(${props.$bgUrlMobile})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 11.46vw;
  height: 24vw;
  position: absolute;
  top: 47%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.$zIndex};

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    left: 53%;
    top: 47%;
    transform: translate(-50%, -50%) scale(0.78);
  }
`;

const StyledFeaturesContentList = styled.div`
  & > div {
    height: 80vh;
    align-content: center;
    justify-items: flex-start;
    text-align: left;
  }
`;

const StyledFeaturesCarousel = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    position: relative;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: #666666;
      opacity: 1;
      transition-duration: 200ms;

      &.swiper-pagination-bullet-active {
        background-color: #ff6f3d;
        transform: scale(1.2);
      }
    }

    @media ${device.mobile} {
      margin-top: 32px;
    }
  }

  .item {
    margin: 0 auto;
  }
`;

export {
  StyledFeaturesWrapper,
  StyledFeaturesAside,
  StyledFeaturesAsideTablet,
  StyledFeaturesAsideTabletImg,
  StyledFeaturesAsideMobile,
  StyledFeaturesAsideMobileImg,
  StyledFeaturesContentList,
  StyledFeaturesCarousel,
};
