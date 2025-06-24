import { useRef, useEffect, useState, useCallback } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import {
  StyledDiscoverProgressBar,
  StyledDiscoverProgressWrapper,
  StyledDiscoverSlide,
  StyledDiscoverWrapper
} from './Discover.styled';

const Discover = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateProgress = () => {
    if (!swiperRef.current || !barRef.current) return;
    const progress = swiperRef.current.progress;
    barRef.current.style.transform = `scaleX(${progress})`;
  };

  const handleSeek = useCallback((clientX: number) => {
    const progressEl = progressRef.current;
    const swiper = swiperRef.current;
    if (!progressEl || !swiper) return;

    const { left, width } = progressEl.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - left) / width, 0), 1);
    swiper.setProgress(percent);
    updateProgress();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSeek(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleSeek(e.clientX);
  }, [isDragging, handleSeek]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <StyledDiscoverWrapper>
      <Swiper
        modules={[FreeMode]}
        freeMode
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        slideToClickedSlide={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.on('setTranslate', updateProgress);
          swiper.on('init', updateProgress);
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
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

export {Discover};