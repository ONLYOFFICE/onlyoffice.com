import { useEffect, useRef } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { useAccumulateYears } from "./utils/useAccumulateYears";
import { discoverFormatDate } from "./utils/discoverFormatDate";
import { IAboutDragState, IAbouts } from "../../About.types";
import { ILocale } from "@src/types/locale";

import {
  StyledDiscoverHeading,
  StyledDiscoverProgressFirstYear,
  StyledDiscoverProgressLastYear,
  StyledDiscoverScrollbarWrapper,
  StyledDiscoverSlideHeading,
  StyledDiscoverSlideText,
  StyledDiscoverWrapper,
  StyledDiscoverYearBlock,
  StyledDiscoverTop,
  StyledDiscoverTopYearText,
  StyledDiscoverBotList,
  StyledDiscoverBotItem,
  StyledDiscoverScrollbarTrack,
  StyledDiscoverScrollbarProgress,
  StyledDiscoverScrollbarThumb,
} from "./Discover.styled";

const Discover = ({ abouts, locale }: IAbouts & ILocale) => {
  const { t } = useTranslation("about");
  const { accumulateItems } = useAccumulateYears(abouts);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<IAboutDragState>({
    isDown: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    isThumbDown: false,
    thumbStartX: 0,
    initialScrollLeft: 0,
  });
  const itemsRef = useRef<HTMLElement[]>([]);

  itemsRef.current = [];
  const addToRefs = (el: HTMLElement | null) => {
    if (el) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = itemsRef.current;
    const thumb = thumbRef.current;
    const progress = progressRef.current;
    const track = trackRef.current;
    if (!wrapper || !items.length || !thumb || !progress || !track) return;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      dragState.current.isDown = true;
      dragState.current.isDragging = false;
      dragState.current.startX = e.pageX - wrapper.offsetLeft;
      dragState.current.scrollLeft = wrapper.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragState.current.isDown) {
        const x = e.pageX - wrapper.offsetLeft;
        const walk = x - dragState.current.startX;

        if (Math.abs(walk) > 5) {
          dragState.current.isDragging = true;
        }

        if (dragState.current.isDragging) {
          wrapper.scrollLeft = dragState.current.scrollLeft - walk;
        }
        return;
      }

      if (dragState.current.isThumbDown) {
        const deltaX = e.pageX - dragState.current.thumbStartX;
        const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
        const maxThumbLeft = track.clientWidth - thumb.clientWidth;

        if (maxThumbLeft <= 0) return;

        const scrollDelta = (deltaX / maxThumbLeft) * scrollableWidth;
        wrapper.scrollLeft = dragState.current.initialScrollLeft + scrollDelta;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!dragState.current.isDown && !dragState.current.isThumbDown && !dragState.current.isDragging) return;

      const wasDragging = dragState.current.isDragging;

      dragState.current.isDown = false;
      dragState.current.isDragging = false;
      dragState.current.isThumbDown = false;

      if (!wasDragging) {
        const target = e.target;
        if (target instanceof Element) {
          const targetSection = items.find((item) => item.contains(target));
          if (targetSection) {
            wrapper.scrollTo({
              left: targetSection.offsetLeft - wrapper.offsetWidth / 2 + 325 / 2,
              behavior: "smooth",
            });
          }
        }
      }

      if (dragState.current.isThumbDown) {
        dragState.current.isThumbDown = false;
      }
    };

    const handleMouseLeaveAndBlur = () => {
      dragState.current.isDown = false;
      dragState.current.isDragging = false;
      dragState.current.isThumbDown = false;
    };

    const updateScrollbar = () => {
      const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
      if (scrollableWidth <= 0) {
          thumb.style.display = 'none';
          return;
      }
       thumb.style.display = 'block';

      const scrollPercentage = (wrapper.scrollLeft / scrollableWidth);

      const trackWidth = track.clientWidth;
      const thumbWidth = thumb.clientWidth;
      const maxThumbLeft = trackWidth - thumbWidth;

      const thumbLeft = scrollPercentage * maxThumbLeft;
      thumb.style.left = `${thumbLeft}px`;
      progress.style.width = `${thumbLeft + (thumbWidth / 2)}px`;
    };

    const handleThumbMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.isThumbDown = true;
      dragState.current.thumbStartX = e.pageX;
      dragState.current.initialScrollLeft = wrapper.scrollLeft;
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mouseleave", handleMouseLeaveAndBlur);
    window.addEventListener("blur", handleMouseLeaveAndBlur);
    wrapper.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);
    thumb.addEventListener('mousedown', handleThumbMouseDown);

    updateScrollbar();

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mouseleave", handleMouseLeaveAndBlur);
      window.removeEventListener("blur", handleMouseLeaveAndBlur);
      wrapper.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
      thumb.removeEventListener('mousedown', handleThumbMouseDown);
    };
  }, [accumulateItems]);

  return (
    <Section background="#F5F5F5">
      <StyledDiscoverHeading
        label={t("DiscoverHeading")}
        level={2}
        size={3}
        textAlign="center"
      />

      <StyledDiscoverWrapper ref={wrapperRef}>
        {accumulateItems.map((yearBlock) => (
          <StyledDiscoverYearBlock key={yearBlock.year}>
            <StyledDiscoverTop>
              <StyledDiscoverTopYearText
                label={yearBlock.year}
                color="#f46c2e"
              />
            </StyledDiscoverTop>
            <StyledDiscoverBotList>
              {yearBlock.items.map((item) => (
                <StyledDiscoverBotItem key={item.id} ref={(el) => addToRefs(el)}>
                  <StyledDiscoverSlideHeading
                    label={discoverFormatDate(item.date, locale)}
                    level={3}
                    size={5}
                    color="#424242"
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
                </StyledDiscoverBotItem>
              ))}
            </StyledDiscoverBotList>
          </StyledDiscoverYearBlock>
        ))}
      </StyledDiscoverWrapper>

      <StyledDiscoverScrollbarWrapper>
        <StyledDiscoverScrollbarTrack ref={trackRef}>
          <StyledDiscoverProgressFirstYear
            label={accumulateItems.at(0)?.year ?? ""}
            size={4}
          />
          <StyledDiscoverScrollbarProgress ref={progressRef} />
          <StyledDiscoverScrollbarThumb ref={thumbRef} />
          <StyledDiscoverProgressLastYear
            label={accumulateItems.at(-1)?.year ?? ""}
            size={4}
          />
        </StyledDiscoverScrollbarTrack>
      </StyledDiscoverScrollbarWrapper>
    </Section>
  );
};

export { Discover };