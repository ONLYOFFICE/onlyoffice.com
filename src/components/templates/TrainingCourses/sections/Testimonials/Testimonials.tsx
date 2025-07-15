import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { items } from "./data/items";

import 'swiper/css';
import {
  StyledTestimonialsSlideWrapper,
  StyledTestimonialsSlideQuotes,
  StyledTestimonialsSlideLogo,
  StyledTestimonialsSlideText,
  StyledTestimonialsSlideAuthor,
  StyledTestimonialsSlideCompany,
  StyledTestimonialsSlideCountry
} from './Testimonials.styled';

const Testimonials = () => {
  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["0", "112px"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container>
        <Heading label="Testimonials" level={2} />
        <Swiper>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <StyledTestimonialsSlideWrapper>
                <StyledTestimonialsSlideQuotes />
                <StyledTestimonialsSlideLogo $logoUrl={item.logo_url} />
                <StyledTestimonialsSlideText label={item.text} />
                <StyledTestimonialsSlideAuthor label={item.author} />
                <StyledTestimonialsSlideCompany label={item.company_name} />
                <StyledTestimonialsSlideCountry label={item.country} />
              </StyledTestimonialsSlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export { Testimonials };