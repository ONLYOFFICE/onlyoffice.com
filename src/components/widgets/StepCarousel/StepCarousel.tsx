import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledStepCarouselWrapper,
  StyledStepCarouselTabs,
  StyledStepCarouselTab,
  StyledStepCarouselBox,
  StyledStepCarouselSlide,
  StyledStepCarouselImg,
  StyledStepCarouselBody,
  StyledStepCarouselNumber,
  StyledStepCarouselHeading,
} from "./StepCarousel.styled";
import { IStepCarousel } from "./StepCarousel.types";
import { CarouselButton } from "@src/components/ui/CarouselButton";

const StepCarousel = ({
  id,
  className,
  tabs,
  items,
  activeTab,
  onChange,
}: IStepCarousel) => {
  const isTabbed = Array.isArray(tabs) && tabs.length > 0;

  return (
    <div id={id} className={className}>
      {isTabbed && (
        <StyledStepCarouselTabs>
          {tabs!.map((tab, i) => (
            <StyledStepCarouselTab
              key={i}
              onClick={() => onChange?.(i)}
              $active={i === activeTab}
            >
              {tab.label}
            </StyledStepCarouselTab>
          ))}
        </StyledStepCarouselTabs>
      )}

      <StyledStepCarouselWrapper>
        {(isTabbed ? tabs! : [{ items }]).map((tab, i) => (
          <StyledStepCarouselBox key={i} $activeTab={i === activeTab}>
            <Swiper
              spaceBetween={32}
              loop
              autoHeight
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: `.swiper-button-prev.swiper-button-prev-${i}`,
                nextEl: `.swiper-button-next.swiper-button-next-${i}`,
              }}
            >
              {(tab.items ?? []).map((item, index) => (
                <SwiperSlide key={index}>
                  <StyledStepCarouselSlide>
                    <StyledStepCarouselImg $imgUrl={item.imgUrl} />
                    <StyledStepCarouselBody>
                      <StyledStepCarouselNumber>
                        {index + 1}
                      </StyledStepCarouselNumber>
                      <StyledStepCarouselHeading>
                        {item.heading}
                      </StyledStepCarouselHeading>
                    </StyledStepCarouselBody>
                  </StyledStepCarouselSlide>
                </SwiperSlide>
              ))}
            </Swiper>

            <CarouselButton
              className={`swiper-button-prev swiper-button-prev-${i}`}
            />
            <CarouselButton
              className={`swiper-button-next swiper-button-next-${i}`}
              direction="right"
            />
          </StyledStepCarouselBox>
        ))}
      </StyledStepCarouselWrapper>
    </div>
  );
};

export { StepCarousel };
