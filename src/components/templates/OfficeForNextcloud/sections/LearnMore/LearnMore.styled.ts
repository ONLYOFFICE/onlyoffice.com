import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledLearnMore = styled(Section)`
  border-top: 1px solid #e2e2e2;
`;

const StyledLearnMoreCarousel = styled.div`
  position: relative;

  .swiper {
    padding: 0 16px 16px;
    margin: 0 -16px -16px;

    .blog-card {
      box-shadow: 0px 7px 7px 0px #55555526;
    }
  }

  .swiper-slide {
    height: initial;
  }

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

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .swiper-button-prev {
    left: -16px;
  }

  .swiper-button-next {
    right: -16px;
  }
`;

const StyledLearnMoreCarouselWrapper = styled.div`
  padding: 0 56px;
`;

const StyledLearnMoreItems = styled.div`
  display: flex;
  column-gap: 32px;

  .blog-card {
    @media ${device.tablet} {
      max-width: 320px;
      min-width: 320px;
      height: initial;
    }

    @media ${device.mobile} {
      max-width: 240px;
      min-width: 240px;
    }
  }

  @media ${device.tablet} {
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

export {
  StyledLearnMore,
  StyledLearnMoreCarousel,
  StyledLearnMoreCarouselWrapper,
  StyledLearnMoreItems,
};
