import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledStepCarousel,
  StyledStepCarouselWrapper,
  StyledStepCarouselImg,
  StyledStepCarouselBody,
  StyledStepCarouselNumber,
  StyledStepCarouselHeading,
} from "./StepCarousel.styled";
import { IStepCarousel } from "./StepCarousel.types";
import { ChevronLeftIcon, ChevronRightIcon } from "@src/components/icons";

const StepCarousel = ({ id, className, items }: IStepCarousel) => {
  return (
    <StyledStepCarousel id={id} className={className}>
      <Swiper
        spaceBetween={32}
        loop
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <StyledStepCarouselWrapper>
              <StyledStepCarouselImg $imgUrl={item.imgUrl} />
              <StyledStepCarouselBody>
                <StyledStepCarouselNumber>{index + 1}</StyledStepCarouselNumber>
                <StyledStepCarouselHeading>
                  {item.heading}
                </StyledStepCarouselHeading>
              </StyledStepCarouselBody>
            </StyledStepCarouselWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev">
        <ChevronLeftIcon />
      </button>
      <button className="swiper-button-next">
        <ChevronRightIcon />
      </button>
    </StyledStepCarousel>
  );
};

export { StepCarousel };
