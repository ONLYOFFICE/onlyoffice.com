import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { CarouselButton } from '@src/components/ui/CarouselButton';
import { ITestimonialsItem } from "../../TrainingCourses.types";

const StyledTestimonialsContainer = styled(Container)`
  position: relative;

  .swiper-pagination {
    position: relative;
    padding-top: 74px;
    background-color: #F5F5F5;
    transform: translateY(10px);

    @media ${device.tabletS} {
      padding-top: 152px;
    }

    @media ${device.mobile} {
      padding-top: 53px;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #ccc;
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background-color: #FF6F3D;
        background-image: linear-gradient(136.1deg, #FFC671 -1.99%, #FF7541 58.57%, #FF6F3D 100%);
      }
    }
  }
`;

const StyledTestimonialsSlideWrapper = styled.div`
  position: relative;
  text-align: center;
  max-width: 926px;
  margin: 0 auto;
  user-select: none;

  @media ${device.desktop} {
    max-width: 70%;
  }

  @media ${device.mobile} {
    max-width: 90%;
  }
`;

const StyledTestimonialsSlideQuotes = styled.div`
  width: 196px;
  height: 160px;
  background-image: url("/images/templates/trainingCourses/testimonials/quotes.svg");
  background-repeat: no-repeat;
  background-position: center top;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
`;

const StyledTestimonialsSlideLogo = styled.div<{
  $logoUrl: ITestimonialsItem["logo_url"];
}>`
  width: 200px;
  height: 50px;
  background-image: ${({ $logoUrl }) => `url("${$logoUrl}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto 32px;
`;

const StyledTestimonialsSlideText = styled(Text)`
  margin-bottom: 32px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledTestimonialsSlideAuthor = styled(Heading)`
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledTestimonialsSlideCompany = styled(Link)`
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledTestimonialsSlideCountry = styled(Text)`
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledTestimonialsSlideBtnPrev = styled(CarouselButton)`
  width: 56px;
  height: 56px;
  transform: translate(30px, -60px);

  @media ${device.mobile} {
    display: none;
  }

  &::after {
    content: "";
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

const StyledTestimonialsSlideBtnNext = styled(CarouselButton)`
  width: 56px;
  height: 56px;
  transform: translate(-30px, -60px);

  @media ${device.mobile} {
    display: none;
  }

  &::after {
    content: "";
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

export {
  StyledTestimonialsContainer,
  StyledTestimonialsSlideWrapper,
  StyledTestimonialsSlideQuotes,
  StyledTestimonialsSlideLogo,
  StyledTestimonialsSlideText,
  StyledTestimonialsSlideAuthor,
  StyledTestimonialsSlideCompany,
  StyledTestimonialsSlideCountry,
  StyledTestimonialsSlideBtnPrev,
  StyledTestimonialsSlideBtnNext
}