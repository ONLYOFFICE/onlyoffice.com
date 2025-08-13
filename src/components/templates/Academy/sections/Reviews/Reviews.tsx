import React from "react";
import {
  StyledSection,
  StyledStepCarouselWrapper,
  QuoteText,
  AuthorName,
  TestimonialCard,
} from "./Reviews.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CarouselButton } from "@src/components/ui/CarouselButton";
import { reviews } from "./data/reviewsItems";
import { useTranslation, Trans } from "next-i18next";


export const Reviews = () => {
  const { t } = useTranslation("academy");

  return (
    <StyledSection background="#f9f9f9">
    <Container>
      <Heading level={2}>
        <Trans
          t={t}
          i18nKey={"WhatOurLearnersSay"}
          components={[<Text as="span" color="main" key={0} />]}
        />
      </Heading>

      <StyledStepCarouselWrapper>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          loop
          speed={500}
          effect="slide"
          slidesPerView={1}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard $bgImage={review.bg}>
                <QuoteText>{t(review.quote)}</QuoteText>
                <AuthorName>{t(review.author)}</AuthorName>
                <Link href={review.link} fontSize="12px" color="#AAAAAA">{t(review.position)}</Link>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselButton className="prev swiper-button-prev" />
        <CarouselButton
          className="next swiper-button-next"
          direction="right"
        />
      </StyledStepCarouselWrapper>
    </Container>
  </StyledSection>
  );
};