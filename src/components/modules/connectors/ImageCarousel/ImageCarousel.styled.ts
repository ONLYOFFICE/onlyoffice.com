import styled, { css } from "styled-components";
import { IImageCarouselItem, IImageCarousel } from "./ImageCarousel.types";
import { device } from "@src/utils/device";

const StyledImageCarousel = styled.div`
  position: relative;

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .swiper-pagination-bullet {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #cccccc;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.swiper-pagination-bullet-active {
        background: linear-gradient(
          136.1deg,
          #ffc671 -1.99%,
          #ff7541 58.57%,
          #ff6f3d 100%
        );
      }
    }

    @media ${device.mobile} {
      margin-top: 32px;
    }
  }
`;

const StyledImageCarouselImgWrapper = styled.div<{
  $imageWidth?: IImageCarousel["imageWidth"];
}>`
  margin: 0 auto;
  max-width: ${(props) => (props.$imageWidth ?? 928) + 172}px;
  padding: 0 86px;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledImageCarouselImg = styled.div<{
  $imageUrl: IImageCarouselItem["image"]["url"];
  $imageUrl2x: IImageCarouselItem["image"]["url2x"];
  $imageWidth?: IImageCarousel["imageWidth"];
  $imageHeight?: IImageCarousel["imageHeight"];
}>`
  padding-bottom: ${(props) =>
    props.$imageHeight && props.$imageWidth
      ? `${((props.$imageHeight / props.$imageWidth) * 100).toFixed(4)}%`
      : "0%"};
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);

  ${(props) =>
    props.$imageUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imageUrl2x});
      }
    `}
`;

const StyledImageCarouselBtns = styled.div<{
  $imageWidth?: IImageCarousel["imageWidth"];
}>`
  position: absolute;
  top: calc(50% - 25px);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: ${(props) => (props.$imageWidth ?? 928) + 172}px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;

  .swiper-button-prev,
  .swiper-button-next {
    pointer-events: initial;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export {
  StyledImageCarousel,
  StyledImageCarouselImgWrapper,
  StyledImageCarouselImg,
  StyledImageCarouselBtns,
};
