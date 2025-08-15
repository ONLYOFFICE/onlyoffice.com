import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const StyledSection = styled(Section)`
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  text-align: center;
`;

const TestimonialCard = styled.div<{ $bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0;
  width: 100%;
  position: relative;
  background-image: url(${(props) => props.$bgImage}), url(/images/templates/academy/reviews/quote.svg);
  background-size: auto 48px, auto auto;
  background-position: 50% 0, 50% 50%;
  background-repeat: no-repeat;
  text-align: center;
  gap: 24px;
  margin: 56px auto 0;
`;

const QuoteText = styled.blockquote`
  font-style: italic;
  font-size: 24px;
  text-align: center;
  line-height: 1.6em;

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const AuthorName = styled(Text)`
  font-size: 13px;
  color: #666666;
  font-weight: 700;
  line-height: 1.6em;
  margin-bottom: -24px;
`;

const StyledStepCarouselWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 0 80px;
  width: 960px;

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

    @media ${device.tabletS} {
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

  @media ${device.tabletS} {
    padding: 0;
  }
`;

export {
  StyledSection,
  StyledStepCarouselWrapper,
  QuoteText,
  AuthorName,
  TestimonialCard,
};
