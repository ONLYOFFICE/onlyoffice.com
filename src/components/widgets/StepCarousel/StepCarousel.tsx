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
import { CarouselButton } from "@src/components/ui/CarouselButton";

const StepCarousel = ({ id, className, items }: IStepCarousel) => {
  return (
    <StyledStepCarousel id={id} className={className}>
      <Swiper
        spaceBetween={32}
        loop
        autoHeight
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.swiper-button-prev.swiper-button-prev-${id}`,
          nextEl: `.swiper-button-next.swiper-button-next-${id}`,
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
      <CarouselButton className={`swiper-button-prev swiper-button-prev-${id}`} />
      <CarouselButton className={`swiper-button-next swiper-button-next-${id}`} direction="right" />
    </StyledStepCarousel>
  );
};

export { StepCarousel };
