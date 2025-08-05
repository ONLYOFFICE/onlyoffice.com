import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledSeamlesslyHeading,
  StyledSeamlesslyImage,
  StyledSeamlesslySwitcherItem,
  StyledSeamlesslySwitcherItemTextWrapper,
  StyledSeamlesslySwitcherItemTitle,
  StyledSeamlesslyWrapper,
  StyledSeamlesslyCarousel,
  StyledSeamlesslyCarouselItem,
} from "./Seamlessly.styled";
import { useRef, useState, useEffect } from "react";
import { items } from "./data/items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const Seamlessly = () => {
  const { t } = useTranslation("document-management");
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<string[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map(
      (ref) => `${ref?.scrollHeight ?? 0}px`,
    );
    setMaxHeight(heights);
  }, [activeIndex]);

  return (
    <Section
      tabletSmallSpacing={["88px", "72px"]}
      mobileSpacing={["36px", "57px"]}
    >
      <Container>
        <StyledSeamlesslyHeading
          level={2}
          size={3}
          label={t("ShareAndCollaborate")}
        />
        <StyledSeamlesslyWrapper>
          <div>
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <StyledSeamlesslySwitcherItem key={item.title}>
                  <StyledSeamlesslySwitcherItemTitle
                    onClick={() => setActiveIndex(index)}
                    $active={isActive}
                  >
                    {t(item.title)}
                  </StyledSeamlesslySwitcherItemTitle>
                  <StyledSeamlesslySwitcherItemTextWrapper
                    $active={isActive}
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    style={{
                      maxHeight: isActive ? maxHeight[index] : "0px",
                    }}
                  >
                    {t(item.text)}
                  </StyledSeamlesslySwitcherItemTextWrapper>
                </StyledSeamlesslySwitcherItem>
              );
            })}
          </div>
          <StyledSeamlesslyImage
            $image={t(items[activeIndex].image)}
            $image2x={t(items[activeIndex].image2x)}
          />
        </StyledSeamlesslyWrapper>

        <StyledSeamlesslyCarousel>
          <Swiper
            loop
            autoHeight
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <StyledSeamlesslyCarouselItem>
                  <StyledSeamlesslyImage
                    $image={t(item.image)}
                    $image2x={t(item.image2x)}
                  />
                  <Heading level={5} size={5} label={t(item.title)} />
                  <Text size={4} label={t(item.text)} />
                </StyledSeamlesslyCarouselItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSeamlesslyCarousel>
      </Container>
    </Section>
  );
};

export { Seamlessly };
