import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { StyledManageTabs, StyledManageTabsItem } from "./Manage.styled";
import { Heading } from "@src/components/ui/Heading";
import { carouselItems } from "./data/items";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ManageCard } from "./sub-compoenents/ManageCard";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const Manage = () => {
  const { t } = useTranslation("workspace");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Section
      desktopSpacing={["112px", "72px"]}
      tabletSpacing={["112px", "72px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <Heading
          level={2}
          size={3}
          label={t("ManageAllYourBusinessProcesses")}
          textAlign="center"
        />
        <StyledManageTabs>
          {carouselItems.map((item, index) => (
            <StyledManageTabsItem
              key={index}
              $icon={item.iconUrl}
              $isActive={index === activeIndex}
              onClick={() => handleClickTab(index)}
            >
              {t(item.title)}
            </StyledManageTabsItem>
          ))}
        </StyledManageTabs>

        <Swiper
          loop
          autoHeight
          pagination={{ clickable: true }}
          spaceBetween={32}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <ManageCard
                title={t(item.title)}
                text={
                  <Trans
                    t={t}
                    i18nKey={String(item.text.label)}
                    components={item.text?.links?.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />
                    ))}
                  />
                }
                textList={item.textList.map((text) => t(text))}
                image={{
                  ...item.image,
                  url: getAssetUrl(t(item.image.url)),
                  url2x: getAssetUrl(t(item.image.url2x)),
                }}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export { Manage };
