import styled from "styled-components";
import { device } from "@src/utils/device";
import { IFeaturesItem } from "./Features.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 700px 352px;
  position: relative;
  justify-content: center;
  column-gap: 70px;

  @media ${device.desktop} {
    grid-template-columns: 57vw 352px;
    column-gap: 3vw;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledFeaturesAside = styled.aside`
  width: 978px;
  height: 685px;
  box-sizing: content-box;
  position: sticky;
  top: calc(10vh + 36px);
  left: 0;

  @media ${device.desktop} {
    left: 50%;
  }

  @media ${device.tablet} {
    position: relative;
    width: 100%;
    height: 77vw;
    top: 0;
    left: 0;
  }
`;

const StyledFeaturesAsideTablet = styled.div`
  background-image: url(${getAssetUrl('/images/templates/office-for-ios/features/tablet.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  width: 1090px;
  height: 830px;
  position: absolute;
  top: 0px;
  left: -370px;
  z-index: 10;

  @media ${device.desktop} {
    left: -495px;
  }

  @media ${device.tablet} {
    width: 100vw;
    height: 80vw;
    left: -20px;
  }
`;

const StyledFeaturesAsideTabletImg = styled.div<{
  $bgUrlTablet: IFeaturesItem["image"]["tablet"]["url"];
  $bgUrlTablet2x: IFeaturesItem["image"]["tablet"]["url2x"];
  $zIndex: IFeaturesItem["zIndex"];
}>`
  background-image: ${(props) => `url(${props.$bgUrlTablet})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 712px;
  height: 534px;
  position: absolute;
  top: 48%;
  left: 47%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.$zIndex};

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$bgUrlTablet2x})`};
  }

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    left: 47%;
    top: 48%;
    transform: translate(-50%, -50%) scale(0.65);
  }
`;

const StyledFeaturesAsideMobile = styled.div`
  background-image: url(${getAssetUrl('/images/templates/office-for-ios/features/mobile.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  bottom: -68px;
  left: 380px;
  width: 370px;
  height: 630px;
  position: absolute;
  z-index: 11;

  @media ${device.desktop} {
    left: 265px;
  }

  @media ${device.tablet} {
    width: 34vw;
    height: 57vw;
    right: 0;
    left: unset;
    top: 12vw;
  }
`;

const StyledFeaturesAsideMobileImg = styled.div<{
  $bgUrlMobile: IFeaturesItem["image"]["mobile"]["url"];
  $bgUrlMobile2x: IFeaturesItem["image"]["mobile"]["url2x"];
  $zIndex: IFeaturesItem["zIndex"];
}>`
  background-image: ${(props) => `url(${props.$bgUrlMobile})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 62%;
  height: 78%;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.$zIndex};

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$bgUrlMobile2x})`};
  }

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    left: 57.5%;
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

    @media ${device.mobile} {
      padding: 0 40px;
    }
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
