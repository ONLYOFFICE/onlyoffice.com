import { useRef, useEffect, useState, useCallback } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IAbout, IAbouts } from '../../About.types';

import 'swiper/css';
import {
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle,
  StyledDiscoverProgressWrapper,
  StyledDiscoverSlide,
  StyledDiscoverWrapper
} from './Discover.styled';

const SWIPER_SPEED = 300;

const Discover = ({ abouts }: IAbouts) => {
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
    <StyledDiscoverWrapper>
      <Swiper
        spaceBetween={20}
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
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <StyledDiscoverSlide>Slide {i + 1}</StyledDiscoverSlide>
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledDiscoverProgressWrapper ref={progressRef} onMouseDown={handleMouseDown}>
        <StyledDiscoverProgressBar ref={barRef} />
        <StyledDiscoverProgressBarHandle ref={barHandle} />
      </StyledDiscoverProgressWrapper>
    </StyledDiscoverWrapper>
  );
};

export { Discover };