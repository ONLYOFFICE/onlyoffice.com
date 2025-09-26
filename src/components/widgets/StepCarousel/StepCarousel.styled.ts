import styled from "styled-components";
import { IStepCarouselItem } from "./StepCarousel.types";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledStepCarouselWrapper = styled.div`
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

const StyledStepCarouselTabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 96px;

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledStepCarouselTab = styled.button<{ $active: boolean }>`
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.$active ? "#ff6f3d" : "transparent")};
  padding: 8px 32px 7px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#444444")};
  min-width: 168px;
  background-color: transparent;
  transition:
    border-color 0.2s,
    color 0.2s;
  cursor: pointer;

  @media ${device.mobile} {
    min-width: 136px;
  }
`;

const StyledStepCarouselBox = styled.div<{ $activeTab?: boolean }>`
  display: ${(props) => (props.$activeTab ? "block" : "none")};
`;

const StyledStepCarouselSlide = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 448px) minmax(200px, 448px);
  column-gap: 32px;
  justify-content: center;

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
  background-position: center;

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
  padding: 32px 0;

  @media ${device.tablet} {
    padding-top: 0;
    text-align: center;
    order: 1;
  }
`;

const StyledStepCarouselNumber = styled.div<{ $theme: string }>`
  color: ${(props) => props.$theme === "dark" ? "#ffffff" : "#808080"};
  margin-bottom: 16px;
  font-size: 60px;
  font-weight: 700;
  line-height: 42px;
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

const StyledStepCarouselTitle = styled(Heading)<{ $theme: string }>`
  color: ${(props) => props.$theme === "dark" ? "#ffffff" : "#333333"};
  font-size: 24px;
  line-height: 1.33em;
  padding-bottom: 16px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export {
  StyledStepCarouselWrapper,
  StyledStepCarouselTabs,
  StyledStepCarouselTab,
  StyledStepCarouselBox,
  StyledStepCarouselSlide,
  StyledStepCarouselImg,
  StyledStepCarouselBody,
  StyledStepCarouselNumber,
  StyledStepCarouselHeading,
  StyledStepCarouselTitle,
};
