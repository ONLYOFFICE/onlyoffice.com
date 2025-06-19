import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledImageCarousel,
  StyledImageCarouselImgWrapper,
  StyledImageCarouselImg,
  StyledImageCarouselBtns,
} from "./ImageCarousel.styled";
import { IImageCarousel } from "./ImageCarousel.types";
import { CarouselButton } from "@src/components/ui/CarouselButton";

const ImageCarousel = ({
  id,
  className,
  items,
  imageWidth = 960,
  imageHeight = 532,
}: IImageCarousel) => {
  return (
    <StyledImageCarousel id={id} className={className}>
      <Swiper
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
            <StyledImageCarouselImgWrapper $imageWidth={imageWidth}>
              <StyledImageCarouselImg
                $imageUrl={item.image.url}
                $imageUrl2x={item.image.url2x || ""}
                $imageWidth={imageWidth}
                $imageHeight={imageHeight}
              />
            </StyledImageCarouselImgWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledImageCarouselBtns $imageWidth={imageWidth}>
        <CarouselButton className="swiper-button-prev" />
        <CarouselButton className="swiper-button-next" direction="right" />
      </StyledImageCarouselBtns>
    </StyledImageCarousel>
  );
};

export { ImageCarousel };
