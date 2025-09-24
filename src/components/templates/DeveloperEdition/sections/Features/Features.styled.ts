import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { SwiperSlide } from "swiper/react";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledCarouselWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 56px 0px;

  .swiper-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    position: initial;

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

    @media (max-width: 1280px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: -80px;
  }

  .swiper-button-next {
    right: -80px;
  }

  @media ${device.tablet} {
    padding: 40px 0;
    width: 100%;
  }
  @media ${device.mobile} {
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  padding: 40px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  //height: 390px;
  max-width: 352px;
  width: auto;

  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

const CardImage = styled.div<{ $src?: string, $position: number }>`
  height: 91px;
  width: 152px;
  margin: 0 auto 16px;
  background-image: url(${(props) => props.$src ? props.$src : "/images/templates/developer-edition/features/docs-cards.svg"});
  background-repeat: no-repeat;
  background-position: ${(props) => props.$position}px 0;
  content: " ";
  display: block;
`;

const FeatureDescription = styled(Text)`
  color: #666666;
  font-size: 14px;
  line-height: 1.6em;
  text-align: center;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  height: auto;
`;

export {
  StyledContainer,
  StyledCarouselWrapper,
  FeatureCard,
  CardImage,
  FeatureDescription,
  StyledSwiperSlide,
};
