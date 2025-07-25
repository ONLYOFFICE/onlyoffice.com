import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const TestimonialCard = styled.div<{ $bgImage?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 290px 0 0;
  width: 100%;
  position: relative;
  background-image: url(${(props) => props.$bgImage});
  background-size: 360px 350px;
  background-position: 50% 0;
  background-repeat: no-repeat;
  text-align: center;
  gap: 24px;
  margin: 56px auto 0;

  @media ${device.tabletS} {
    margin: 24px auto 0;
  }
  
  @media ${device.mobile} {
    padding: 224px 0 0;
    background-size: 288px auto;
  }
`;

const QuoteText = styled.blockquote`
    font-style: italic;
    font-size: 22px;
    text-align: center;
    line-height: 1.6em;
  
  @media ${device.tabletS} {
    font-size: 18px;
  }
  
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const AuthorName = styled(Text)`
  font-size: 13px;
  color: #666666;
  font-weight: 700;
  line-height: 1.6em;
  margin-bottom: -24px;
`;

const StyledSuccessStoriesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  text-align: left;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;
    row-gap: 32px;
    margin-bottom: 32px;
  }
`;

const StyledStepCarouselWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 0 80px 56px;
  width: 768px;

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

  @media ${device.tablet} {
   width: 100%;
  }
  @media ${device.mobile} {
    padding: 0 0 48px;
  }
`;

export { StyledSuccessStoriesItems, StyledContainer, StyledStepCarouselWrapper, QuoteText, AuthorName, TestimonialCard };