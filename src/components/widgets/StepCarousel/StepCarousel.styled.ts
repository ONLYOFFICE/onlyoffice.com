import styled from "styled-components";
import { IStepCarouselItem } from "./StepCarousel.types";
import { device } from "@src/utils/device";

export const StyledStepCarouselTabs = styled.div`
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 96px;

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
    gap: 8px;
  }
`;

export const StyledStepCarouselTab = styled.button<{ $active?: boolean }>`
  border: none;
  background: transparent;
  color: ${({ $active }) => ($active ? "#ff6f3d" : "#33333")};
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.08em;
  line-height: 1.33em;
  padding: 0px 0 16px;
  text-align: center;
  text-transform: uppercase;
  width: 205px;
  cursor: pointer;
      position: relative;
  transition: all 0.2s ease;

  ${({ $active }) =>
    $active &&
    `&:after { 
    display: block;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ff6f3d;
    position: absolute;
    top: 32px;
    left: 0;
  }`}

  @media ${device.mobile} {
    width: calc(50% - 40px);
  }
`;

const StyledStepCarousel = styled.div`
  position: relative;
  padding: 0 80px;

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
    padding: 0;
  }
`;

const StyledStepCarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 448px) minmax(200px, 480px);
  column-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: initial;
    row-gap: 32px;
  }
`;

const StyledStepCarouselImg = styled.div<{
  $imgUrl: IStepCarouselItem["imgUrl"];
}>`
  padding-bottom: 57.59%;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tablet} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 100%;
    max-width: 448px;
    height: 254px;
    order: 2;
  }

  @media ${device.tabletS} {
    padding-bottom: 48.107%;
    height: initial;
  }

  @media ${device.mobile} {
    padding-bottom: 56.92%;
    max-width: 100%;
  }
`;

const StyledStepCarouselBody = styled.div`
  padding-top: 32px;

  @media ${device.tablet} {
    padding-top: 0;
    text-align: center;
    order: 1;
  }
`;

const StyledStepCarouselNumber = styled.div`
  margin-bottom: 16px;
  font-size: 60px;
  font-weight: 700;
  line-height: 42px;
  color: #808080;
  opacity: 0.2;
`;

const StyledStepCarouselHeading = styled.div`
  font-size: 22px;
  line-height: 33px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export {
  StyledStepCarousel,
  StyledStepCarouselWrapper,
  StyledStepCarouselImg,
  StyledStepCarouselBody,
  StyledStepCarouselNumber,
  StyledStepCarouselHeading,
};
