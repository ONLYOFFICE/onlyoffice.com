import { memo } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  StyledTestimonialsSlideWrapper,
  StyledTestimonialsSlideQuotes,
  StyledTestimonialsSlideLogo,
  StyledTestimonialsSlideText,
  StyledTestimonialsSlideAuthor,
  StyledTestimonialsSlideCompany,
  StyledTestimonialsSlideCountry,
  StyledTestimonialsSlideBtnPrev,
  StyledTestimonialsSlideBtnNext,
  StyledTestimonialsContainer
} from './Testimonials.styled';

const TestimonialsComponent = () => {
  const { t } = useTranslation("training-courses")

  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["0", "112px"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "48px"]}
    >
      <StyledTestimonialsContainer>
        <Swiper
          loop
          autoHeight={true}
          speed={700}
          modules={[
            Navigation,
            Pagination,
          ]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{clickable: true}}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <StyledTestimonialsSlideWrapper>
                <StyledTestimonialsSlideQuotes />
                <StyledTestimonialsSlideLogo $logoUrl={item.logo_url} />
                <StyledTestimonialsSlideText>
                  <Trans t={t} i18nKey={item.text} components={{br: <br />}} />
                </StyledTestimonialsSlideText>
                <StyledTestimonialsSlideAuthor
                  level={3}
                  size={7}
                  label={item.author}
                  color="#666"
                />
                <StyledTestimonialsSlideCompany
                  label={item.company_name}
                  href={item.company_link}
                  target='_blank'
                />
                <StyledTestimonialsSlideCountry label={item.country} />
              </StyledTestimonialsSlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
          <StyledTestimonialsSlideBtnPrev
            direction="left"
            className="swiper-button-prev"
          />
          <StyledTestimonialsSlideBtnNext
            direction="right"
            className="swiper-button-next"
          />
      </StyledTestimonialsContainer>
    </Section>
  );
};

const Testimonials = memo(TestimonialsComponent)

export { Testimonials };