import { useRef } from "react";
import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { useFeaturesAnimation } from "@src/utils/useFeaturesAnimation";
import { items } from "./data/items";

import {
  StyledFeaturesAside,
  StyledFeaturesAsideMobile,
  StyledFeaturesAsideMobileImg,
  StyledFeaturesAsideTablet,
  StyledFeaturesAsideTabletImg,
  StyledFeaturesCarousel,
  StyledFeaturesContentList,
  StyledFeaturesWrapper,
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("office-for-android");
  const containerRef = useRef<HTMLDivElement>(null);
  useFeaturesAnimation(containerRef);
  const len = items.length;

  return (
    <Section
      background="#FAFAFA"
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "95px"]}
    >
      <Container maxWidth="1920px" tabletSpacing="0" mobileSpacing="0">
        <StyledFeaturesWrapper ref={containerRef}>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet>
              {items.map((item, index) => {
                const reverseIndex = len - index;
                return (
                  <StyledFeaturesAsideTabletImg
                    key={`${item.heading} TabletImg`}
                    className="tabletImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlTablet={t(item.image.tablet.url)}
                    $bgUrlTablet2x={t(item.image.tablet.url2x)}
                  />
                );
              })}
            </StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile>
              {items.map((item, index) => {
                const reverseIndex = len - index;
                return (
                  <StyledFeaturesAsideMobileImg
                    key={`${item.heading} MobileImg`}
                    className="mobileImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlMobile={t(item.image.mobile.url)}
                    $bgUrlMobile2x={t(item.image.mobile.url2x)}
                  />
                );
              })}
            </StyledFeaturesAsideMobile>
          </StyledFeaturesAside>
          <StyledFeaturesContentList>
            {items.map((item) => {
              return (
                <FeatureItem
                  key={item.heading}
                  className="item"
                  maxWidth="280px"
                  icon={{
                    url: item.iconUrl,
                  }}
                  heading={t(item.heading)}
                  text={t(item.text)}
                />
              );
            })}
          </StyledFeaturesContentList>
        </StyledFeaturesWrapper>
        <StyledFeaturesCarousel>
          <Swiper
            className="swiper"
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide className="slide" key={`${item.heading} Slide`}>
                  <StyledFeaturesAside>
                    <StyledFeaturesAsideTablet>
                      <StyledFeaturesAsideTabletImg
                        $zIndex={String(index + 1)}
                        $bgUrlTablet={t(item.image.tablet.url)}
                        $bgUrlTablet2x={t(item.image.tablet.url2x)}
                      />
                    </StyledFeaturesAsideTablet>
                    <StyledFeaturesAsideMobile>
                      <StyledFeaturesAsideMobileImg
                        $zIndex={String(index + 1)}
                        $bgUrlMobile={t(item.image.mobile.url)}
                        $bgUrlMobile2x={t(item.image.mobile.url2x)}
                      />
                    </StyledFeaturesAsideMobile>
                  </StyledFeaturesAside>
                  <FeatureItem
                    className="item"
                    maxWidth="80%"
                    icon={{
                      url: item.iconUrl,
                    }}
                    heading={t(item.heading)}
                    text={t(item.text)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </StyledFeaturesCarousel>
      </Container>
    </Section>
  );
};

export { Features };
