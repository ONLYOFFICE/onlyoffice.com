import { useTranslation } from "next-i18next";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselButton } from "@src/components/ui/CarouselButton";
import {
  StyledContainer,
  FeatureCard,
  CardImage,
  FeatureDescription,
  StyledCarouselWrapper,
  StyledSwiperSlide
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";

import { features } from "./data/items";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const Features = () => {
  const { t } = useTranslation("developer-edition");


  return (
    <Section
      background="#f5f5f5"
      tabletSpacing={["56px", "80px"]}
      mobileSpacing={["28px", "48px"]}
    >
      <StyledContainer>
        <Heading level={2}>
          {t("FeaturesTitle")}
        </Heading>

        <StyledCarouselWrapper>
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
            slidesPerView={3}
            spaceBetween={32}
            autoHeight={false}
            style={{ height: "100%" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              593: {
                slidesPerView: 2, 
              },
              768: {
                slidesPerView: 3, 
              },
            }}
          >
            {features.map((feature, index) => (
              <StyledSwiperSlide key={index}>
                <FeatureCard>
                  <CardImage $src={feature.icon} $position={feature.iconPosition} />
                  <Heading level={4}>{t(feature.title)}</Heading>
                  <FeatureDescription>{t(feature.description)}</FeatureDescription>
                  <Link fontSize="14px" color="main" textUnderline hover="underline-none" href={feature.link}>{t("LearnMore")}</Link>
                </FeatureCard>
              </StyledSwiperSlide>
            ))}
          </Swiper>
          <CarouselButton className="prev swiper-button-prev" />
          <CarouselButton
            className="next swiper-button-next"
            direction="right"
          />
        </StyledCarouselWrapper>

        <Button as="a" href="/see-it-in-action?developer=edition">
          {t("HeroButtonSeeAction")}
        </Button>
      </StyledContainer>
    </Section>
  );
};

export { Features };
