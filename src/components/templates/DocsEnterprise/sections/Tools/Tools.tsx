import { Text } from "@src/components/ui/Text";
import {
  StyledSubheaderText,
  StyledToolsArea,
  StyledToolsHeading,
  StyledVideoArea,
  StyledSliderViewport,
  StyledCollaborateList,
  StyledCollaborateItem,
  StyledWatchVideo
} from "./Tools.styled";
import { Trans, useTranslation } from "next-i18next";
import { carouselItems } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { CollaborateCard } from "./sub-components/CollaborateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { getAssetUrl } from "@utils/getAssetUrl";

const Tools = () => {
  const { t } = useTranslation("docs-enterprise");
  const { locale } = useRouter();
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
    <Section background="#F9F9F9">
      <StyledToolsArea>
        <StyledToolsHeading level={2}>
          <Trans
            t={t}
            i18nKey={String(t("ToolsHeader"))}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledToolsHeading>
        <StyledSubheaderText fontSize="18px" lineHeight="27px">
          <Trans t={t} i18nKey={String(t("ToolsSubheader"))} />
        </StyledSubheaderText>

        <StyledCollaborateList>
          {carouselItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <StyledCollaborateItem
                key={index}
                $title={t(item.title)}
                $image={getAssetUrl(item.iconUrl)}
                $isActive={isActive}
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
        <StyledVideoArea>
          <StyledWatchVideo
            heading={t("ToolsVideoDescription")}
            videoImgUrl={locale !== "zh" ? "/images/templates/docs-enterprise/tools/docs-9-0.png" : "/images/templates/docs-enterprise/tools/zh/docs-9-0.png"}
            videoUrl={locale !== "zh" ? "https://www.youtube.com/embed/rH1sMMwtyPE" : "https://player.bilibili.com/player.html?isOutside=true&aid=BV1ZFKHzWE5g&bvid=BV1ZFKHzWE5g&cid=BV1ZFKHzWE5g&muted=true"}
          />
        </StyledVideoArea>
      </StyledToolsArea>
    </Section>
  );
};

export { Tools };
