import { useRef } from "react";
// import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { featuresAnimation } from "./lib/featuresAnimation";
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
  // const { t } = useTranslation("office-for-ios");
  const containerRef = useRef<HTMLDivElement>(null);
  featuresAnimation(containerRef);
  const len = items.length;

  return (
    <Section
      background="#FAFAFA"
      desktopSpacing={["0", "112px"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container maxWidth="1920px">
        <StyledFeaturesWrapper ref={containerRef}>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet>
              {items.map((item, i) => {
                const reverseIndex = len - i;
                return (
                  <StyledFeaturesAsideTabletImg
                    key={`${item.heading} TabletImg`}
                    className="tabletImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlTablet={item.bgUrlTablet}
                  />
                );
              })}
            </StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile>
              {items.map((item, i) => {
                const reverseIndex = len - i;
                return (
                  <StyledFeaturesAsideMobileImg
                    key={`${item.heading} MobileImg`}
                    className="mobileImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlMobile={item.bgUrlMobile}
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
                  heading={item.heading}
                  text={item.text}
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
                <SwiperSlide className="slide" key={item.heading}>
                  <StyledFeaturesAside>
                    <StyledFeaturesAsideTablet>
                      <StyledFeaturesAsideTabletImg
                        $zIndex={String(index + 1)}
                        $bgUrlTablet={item.bgUrlTablet}
                      />
                    </StyledFeaturesAsideTablet>
                    <StyledFeaturesAsideMobile>
                      <StyledFeaturesAsideMobileImg
                        $zIndex={String(index + 1)}
                        $bgUrlMobile={item.bgUrlMobile}
                      />
                    </StyledFeaturesAsideMobile>
                  </StyledFeaturesAside>
                  <FeatureItem
                    className="item"
                    maxWidth="80%"
                    icon={{
                      url: item.iconUrl,
                    }}
                    heading={item.heading}
                    text={item.text}
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
