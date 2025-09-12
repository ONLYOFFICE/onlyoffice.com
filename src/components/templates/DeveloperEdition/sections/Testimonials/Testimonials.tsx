import { useTranslation, Trans } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselButton } from "@src/components/ui/CarouselButton";
import "swiper/css";
import "swiper/css/pagination";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledContainer,
  StyledStepCarouselWrapper,
  QuoteText,
  AuthorName,
  TestimonialCard,
  StyledSuccessStoriesItems,
} from "./Testimonials.styled";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { Section } from "@src/components/ui/Section";
import { successStoriesItems } from "./data/successStoriesItems";
import { testimonials } from "./data/testimonialsItems";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const Testimonials = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <Section>
      <StyledContainer>
        <Heading level={2}>
          <Trans
            t={t}
            i18nKey={"Trusted"}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard $bgImage={testimonial.bg}>
                  <QuoteText>{t(testimonial.quote)}</QuoteText>
                  <AuthorName>{t(testimonial.author)}</AuthorName>
                  <Text fontSize="12px" color="#AAAAAA">{t(testimonial.position)}</Text>
                  {testimonial.link && (
                    <Link color="main" textUnderline hover="underline-none" href={t(testimonial.link)}>{t("ReadUseCase")}</Link>
                  )}
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

        <StyledSuccessStoriesItems>
          {successStoriesItems.map((item, index) => (
            <StoryCard
              imgUrl={getAssetUrl(t(item.imgUrl))}
              linkUrl={getAssetUrl(t(item.linkUrl))}
              heading={t(item.heading)}
              key={index}
            />
          ))}
        </StyledSuccessStoriesItems>
      </StyledContainer>
    </Section>
  );
};

export { Testimonials };
