import { useState, useRef } from "react";
import { Trans, useTranslation } from "next-i18next";
import { carouselItems } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { CollaborateCard } from "./sub-components/CollaborateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  StyledSliderViewport,
  StyledCollaborateList,
  StyledCollaborateItem,
  StyledContainer,
} from "./Collaborate.styled";
import "swiper/css";

const Collaborate = () => {
  const { t } = useTranslation("docspace");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Section>
      <StyledContainer>
        <Heading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey={"CollaborateTitle"}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
        <Text>{t("CollaborateDescription")}</Text>
        <StyledCollaborateList>
          {carouselItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <StyledCollaborateItem
                key={index}
                $title={t(item.title)}
                $image={isActive ? item.icon.urlActive : item.icon.url}
                $isActive={isActive}
                $comingSoon={item.isComingSoon}
                $comingSoonText={t("comingSoon")}
                onClick={() => handleTabClick(index)}
              />
            );
          })}
        </StyledCollaborateList>

        <StyledSliderViewport>
          <Swiper
            spaceBetween={32}
            loop
            autoHeight
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {carouselItems.map((item) => (
              <SwiperSlide key={item.id}>
                <CollaborateCard
                  id={item.id}
                  title={t(item.title)}
                  description={t(item.description)}
                  image={item.image}
                  linkLabel={t(item.linkLabel)}
                  href={item.href}
                  isActive={
                    activeIndex ===
                    carouselItems.findIndex((i) => i.title === item.title)
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSliderViewport>

        <Button
        as="a"
          label={t("CollaborateButton")}
          href="/docspace-registration"
          size="medium"
        />
      </StyledContainer>
    </Section>
  );
};

export { Collaborate };
