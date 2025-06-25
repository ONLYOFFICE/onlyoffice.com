import { useRef, useEffect, useState, useCallback } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Section } from '@src/components/ui/Section';
import { discoverFormatDate } from './utils/discoverFormatDate';
// import { discoverFormatYear } from './utils/discoverFormatYear';
import { IAbout, IAbouts } from '../../About.types';
import { ILocale } from "@src/types/locale";

import 'swiper/css';
import {
  StyledDiscoverHeading,
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle,
  StyledDiscoverProgressWrapper,
  StyledDiscoverSlide,
  StyledDiscoverSlideHeading,
  StyledDiscoverSlideText,
  StyledDiscoverWrapper
} from './Discover.styled';

const SWIPER_SPEED = 300;

const Discover = ({ abouts, locale }: IAbouts & ILocale) => {
  const { t } = useTranslation("about");

  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barHandle = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const widthRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [items, setItems] = useState<IAbout[]>([]);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    setItems(abouts.data);
  }, [abouts]);

  useEffect(() => {
    const progressEl = progressRef.current;
    if (progressEl) {
      const updateWidth = () => {
        const newWidth = progressEl.getBoundingClientRect().width;
        setProgressBarWidth(newWidth);
        widthRef.current = newWidth;
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);

      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(0, 0);
  }, [items]);

  const updateProgress = useCallback(() => {
    if (!swiperRef.current || !barRef.current || !barHandle.current) return;

    const progress = swiperRef.current.progress;
    barRef.current.style.transform = `scaleX(${progress})`;

    const currentWidth = widthRef.current;
    if (currentWidth === 0) return;

    const pixelOffset = progress * currentWidth;
    barHandle.current.style.transform = `translateX(${pixelOffset}px)`;
  }, []);

  useEffect(() => {
    if (progressBarWidth > 0) {
      updateProgress();
    }
  }, [progressBarWidth, updateProgress]);

  const handleSeek = useCallback((clientX: number) => {
    const progressEl = progressRef.current;
    const swiper = swiperRef.current;
    if (!progressEl || !swiper) return;

    const { left, width } = progressEl.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - left) / width, 0), 1);

    swiper.setProgress(percent, 0);
    updateProgress();
  }, [updateProgress]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (barHandle.current) {
      barHandle.current.style.transition = 'none';
    }
    setIsDragging(true);
    handleSeek(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleSeek(e.clientX);
  }, [isDragging, handleSeek]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    if (barHandle.current) {
      barHandle.current.style.transition = `transform ${SWIPER_SPEED}ms ease`;
    }
    setIsDragging(false);

    const swiper = swiperRef.current;
    if (swiper && swiper.slides.length > 0) {
      const targetIndex = Math.round(swiper.progress * (swiper.slides.length - 1));
      swiper.slideTo(targetIndex, SWIPER_SPEED);
    }
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Section background='#F5F5F5'>
      <StyledDiscoverHeading label={t("DiscoverHeading")} level={2} size={3} textAlign='center' />
      <StyledDiscoverWrapper>
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          slideToClickedSlide={true}
          speed={SWIPER_SPEED}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.on('progress', updateProgress);
            swiper.on('init', updateProgress);
            swiper.on('slideChangeTransitionStart', () => {
              if (barHandle.current) {
                barHandle.current.style.transition = `transform ${SWIPER_SPEED}ms ease`;
              }
            });
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <StyledDiscoverSlide>
                <StyledDiscoverSlideHeading
                  label={discoverFormatDate(item.date, locale)}
                  level={3}
                  size={5}
                  color='#424242'
                />
                <StyledDiscoverSlideText>
                  <Trans
                    t={t}
                    i18nKey={item.description}
                    components={{
                      p: <p />
                    }}
                  />
                </StyledDiscoverSlideText>
              </StyledDiscoverSlide>
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledDiscoverProgressWrapper ref={progressRef} onMouseDown={handleMouseDown}>
          <StyledDiscoverProgressBar ref={barRef} />
          <StyledDiscoverProgressBarHandle ref={barHandle} />
        </StyledDiscoverProgressWrapper>
      </StyledDiscoverWrapper>
    </Section>
  );
};

export { Discover };