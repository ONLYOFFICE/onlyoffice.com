import styled from "styled-components";
import { IImageCarouselItem, IImageCarousel } from "./ImageCarousel.types";
import { device } from "@src/utils/device";

const StyledImageCarousel = styled.div`
  position: relative;
  padding: 48px 0 80px;

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

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: calc(50% - 25px);
    transform: translateY(-50%);
    z-index: 10;

    @media ${device.mobile} {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  @media ${device.mobile} {
    padding: 48px 0 24px;
  }
`;

const StyledStepCarouselImg = styled.div<{
  $imageUrl: IImageCarouselItem["image"]["url"];
  $imageUrl2x: IImageCarouselItem["image"]["url2x"];
  $imageWidth?: IImageCarousel["imageWidth"];
  $imageHeight?: IImageCarousel["imageHeight"];
}>`

  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  width: ${(props) => props.$imageWidth}px;
  height: ${(props) => props.$imageHeight}px;
  box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);

  @media ${device.desktop} {
    aspect-ratio: ${(props) => props.$imageWidth! / props.$imageHeight!};
    margin: 0 auto;
    padding-bottom: 0;
    width: 100%;
    max-width: calc(100% - 142px);
    height: initial;
  }

  @media ${device.mobile} {
    max-width: 100%;
  }

  @media ${device.retina} {
    background-image: ${({ $imageUrl, $imageUrl2x }) =>
      `url(${$imageUrl2x || $imageUrl})`};
  }
`;

const StyledStepCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: initial;
    row-gap: 32px;
  }
`;

export { StyledImageCarousel, StyledStepCarouselImg, StyledStepCarouselWrapper };
