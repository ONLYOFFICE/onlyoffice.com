import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledLearnMore,
  StyledLearnMoreCarousel,
  StyledLearnMoreCarouselWrapper,
  StyledLearnMoreItems,
} from "./LearnMore.styled";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";
import { CarouselButton } from "@src/components/ui/CarouselButton";

const LearnMore = () => {
  const { t } = useTranslation("office-for-nextcloud");
  const [isCarouselEnabled, setIsCarouselEnabled] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setIsCarouselEnabled(false);
      } else {
        setIsCarouselEnabled(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledLearnMore>
      <Container maxWidth="1312px">
        <StyledLearnMoreCarousel>
          {isCarouselEnabled ? (
            <>
              <StyledLearnMoreCarouselWrapper>
                <Swiper
                  slidesPerView={3}
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
                      <BlogCard
                        className="blog-card"
                        imgUrl={item.imgUrl}
                        heading={{ label: t(item.heading.label) }}
                        links={item.links?.map((item) => ({
                          href: t(item.href),
                          label: t(item.label),
                        }))}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </StyledLearnMoreCarouselWrapper>

              <CarouselButton className="swiper-button-prev" />
              <CarouselButton
                className="swiper-button-next"
                direction="right"
              />
            </>
          ) : (
            <StyledLearnMoreItems>
              {items.map((item, index) => (
                <BlogCard
                  className="blog-card"
                  key={index}
                  imgUrl={item.imgUrl}
                  heading={{ label: t(item.heading.label) }}
                  links={item.links?.map((item) => ({
                    href: item.href,
                    label: t(item.label),
                  }))}
                />
              ))}
            </StyledLearnMoreItems>
          )}
        </StyledLearnMoreCarousel>
      </Container>
    </StyledLearnMore>
  );
};

export { LearnMore };
