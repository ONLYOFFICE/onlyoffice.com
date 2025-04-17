import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {
  StyledStepCarousel,
  StyledStepCarouselWrapper,
  StyledStepCarouselImg,
  StyledStepCarouselBody,
  StyledStepCarouselNumber,
  StyledStepCarouselHeading,
  StyledStepCarouselTabs,
  StyledStepCarouselTab,
} from "./StepCarousel.styled";
import {
  IStepCarousel,
  IStepCarouselItem,
  IStepCarouselTab,
} from "./StepCarousel.types";
import { CarouselButton } from "@src/components/ui/CarouselButton";
import { Link } from "@src/components/ui/Link";

const StepCarousel = ({
  id,
  className,
  items,
  defaultSelected,
  namespace,
  onTabChange,
  useTabs = false,
}: IStepCarousel) => {
  const { t } = useTranslation(namespace);
  const isTabbed = useTabs && Array.isArray(items) && "id" in items[0];
  const [selectedTab, setSelectedTab] = useState(
    isTabbed ? defaultSelected || (items as IStepCarouselTab[])[0].id : "",
  );

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
    onTabChange?.(tabId);
  };

  const displayItems = isTabbed
    ? (items as IStepCarouselTab[]).find((item) => item.id === selectedTab)
        ?.items || []
    : (items as IStepCarouselItem[]);

  return (
    <StyledStepCarousel id={id} className={className}>
      {isTabbed && (
        <StyledStepCarouselTabs>
          {(items as IStepCarouselTab[]).map((item) => (
            <StyledStepCarouselTab
              key={item.id}
              $active={item.id === selectedTab}
              onClick={() => handleTabChange(item.id)}
            >
              {t(item.label)}
            </StyledStepCarouselTab>
          ))}
        </StyledStepCarouselTabs>
      )}

      <Swiper
        key={isTabbed ? selectedTab : "default"}
        spaceBetween={32}
        loop
        autoHeight
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.swiper-button-prev.swiper-button-prev-${id}`,
          nextEl: `.swiper-button-next.swiper-button-next-${id}`,
        }}
      >
        {displayItems.map((item: IStepCarouselItem, index: number) => (
          <SwiperSlide key={index}>
            <StyledStepCarouselWrapper>
              <StyledStepCarouselImg $imgUrl={t(item.imgUrl)} />
              <StyledStepCarouselBody>
                <StyledStepCarouselNumber>{index + 1}</StyledStepCarouselNumber>
                <StyledStepCarouselHeading>
                  {item.headingLinks ? (
                    <Trans
                      t={t}
                      i18nKey={String(item.heading)}
                      components={item.headingLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          target={link.isExternal ? "_blank" : undefined}
                          color="main"
                          textUnderline
                          hover="underline-none"
                        />
                      ))}
                    />
                  ) : (
                    <Trans
                      t={t}
                      i18nKey={String(item.heading)}
                      components={[<strong key={0} />]}
                    />
                  )}
                </StyledStepCarouselHeading>
              </StyledStepCarouselBody>
            </StyledStepCarouselWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselButton
        className={`swiper-button-prev swiper-button-prev-${id}`}
      />
      <CarouselButton
        className={`swiper-button-next swiper-button-next-${id}`}
        direction="right"
      />
    </StyledStepCarousel>
  );
};

export { StepCarousel };
