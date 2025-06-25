import { useRef, useEffect, useState, useCallback } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IAbout, IAbouts } from '../../About.types';

import 'swiper/css';
import {
  StyledDiscoverProgressBar,
  StyledDiscoverProgressWrapper,
  StyledDiscoverSlide,
  StyledDiscoverWrapper
} from './Discover.styled';

const Discover = ({ abouts }: IAbouts) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [items, setItems] = useState<IAbout[]>([]);

  useEffect(() => {
    setItems(abouts.data);
  }, [abouts]);

  useEffect(() => {
    if (!swiperRef.current || !barRef.current) return;
    barRef.current.style.transform = 'scaleX(0)';
    swiperRef.current.setProgress(0);
  }, [items]);

  const updateProgress = useCallback(() => {
    if (!swiperRef.current || !barRef.current) return;
    const progress = swiperRef.current.progress;
    barRef.current.style.transform = `scaleX(${progress})`;
  }, []);

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
    setIsDragging(true);
    handleSeek(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleSeek(e.clientX);
  }, [isDragging, handleSeek]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    const swiper = swiperRef.current;
    if (swiper && swiper.slides.length > 0) {
      const targetIndex = Math.round(swiper.progress * (swiper.slides.length - 1));
      swiper.slideTo(targetIndex);
    }

    setIsDragging(false);
  }, [isDragging]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <StyledDiscoverWrapper>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        slideToClickedSlide={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.on('progress', updateProgress);
          swiper.on('slideChange', updateProgress);
          swiper.on('init', updateProgress);
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
      </StyledDiscoverProgressWrapper>
    </StyledDiscoverWrapper>
  );
};

export { Discover };