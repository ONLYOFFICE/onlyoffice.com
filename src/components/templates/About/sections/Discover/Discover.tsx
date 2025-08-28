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
    initialX: 0,
    initialY: 0,
    lockDirection: null,
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

    const getCoords = (e: MouseEvent | TouchEvent): { pageX: number, pageY: number } => {
      if (e.type.startsWith("touch")) {
        return {
          pageX: (e as TouchEvent).touches[0].pageX,
          pageY: (e as TouchEvent).touches[0].pageY
        };
      }
      return {
        pageX: (e as MouseEvent).pageX,
        pageY: (e as MouseEvent).pageY
      };
    };

    const handleDragStart = (e: MouseEvent | TouchEvent) => {
      const { pageX, pageY } = getCoords(e);
      dragState.current.isDown = true;
      dragState.current.isDragging = false;
      dragState.current.startX = pageX - wrapper.offsetLeft;
      dragState.current.scrollLeft = wrapper.scrollLeft;

      dragState.current.initialX = pageX;
      dragState.current.initialY = pageY;
      dragState.current.lockDirection = null;
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
      if (e.type === "touchmove" && !dragState.current.lockDirection) {
        const threshold = 10;
        const { pageX, pageY } = getCoords(e);
        const deltaX = Math.abs(pageX - dragState.current.initialX);
        const deltaY = Math.abs(pageY - dragState.current.initialY);

        if (deltaX > threshold || deltaY > threshold) {
          dragState.current.lockDirection = deltaX > deltaY ? "horizontal" : "vertical";
        }
      }

      if (dragState.current.lockDirection === "vertical") {
        return;
      }

      if (dragState.current.lockDirection === "horizontal") {
        e.preventDefault();
      }

      const { pageX } = getCoords(e);

      if (dragState.current.isDown) {
        const x = pageX - wrapper.offsetLeft;
        const walk = x - dragState.current.startX;
        if (!dragState.current.isDragging && Math.abs(walk) > 5) {
          dragState.current.isDragging = true;
        }
        if (dragState.current.isDragging) {
          wrapper.scrollLeft = dragState.current.scrollLeft - walk;
        }
        return;
      }

      if (dragState.current.isThumbDown) {
        const deltaX = pageX - dragState.current.thumbStartX;
        const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
        const maxThumbLeft = track.clientWidth - thumb.clientWidth;
        if (maxThumbLeft <= 0) return;
        const scrollDelta = (deltaX / maxThumbLeft) * scrollableWidth;
        wrapper.scrollLeft = dragState.current.initialScrollLeft + scrollDelta;
      }
    };

    const snapToClosestItem = () => {
      const currentScrollLeft = wrapper.scrollLeft;
      const viewportCenter = wrapper.offsetWidth / 2;

      let minDistance = Infinity;
      let closestItemIndex = -1;

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const targetScrollLeft = itemCenter - viewportCenter;
        const distance = Math.abs(currentScrollLeft - targetScrollLeft);

        if (distance < minDistance) {
          minDistance = distance;
          closestItemIndex = index;
        }
      });

      if (closestItemIndex !== -1) {
        const closestItem = items[closestItemIndex];
        const itemCenter = closestItem.offsetLeft + closestItem.offsetWidth / 2;
        const targetScrollLeft = itemCenter - viewportCenter;

        wrapper.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });
      }
    };


    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      if (!dragState.current.isDown && !dragState.current.isThumbDown) return;

      const wasDragging =
        dragState.current.isDragging ||
        (dragState.current.lockDirection === "horizontal" && dragState.current.isDown);

      const wasThumbDragging = dragState.current.isThumbDown;

      dragState.current.isDown = false;
      dragState.current.isDragging = false;
      dragState.current.isThumbDown = false;
      dragState.current.lockDirection = null;

      if (wasDragging && !wasThumbDragging) {
        snapToClosestItem();
      } else if (!wasDragging && !wasThumbDragging) {
        const target = e.type === "touchend"
            ? document.elementFromPoint(
                (e as TouchEvent).changedTouches[0].clientX,
                (e as TouchEvent).changedTouches[0].clientY
              )
            : (e as MouseEvent).target;

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
    };

    const handleDragCancel = () => {
      dragState.current.isDown = false;
      dragState.current.isDragging = false;
      dragState.current.isThumbDown = false;
      dragState.current.lockDirection = null;
    };

    const updateScrollbar = () => {
      if (!wrapper || !thumb || !track || !progress) return;
      const scrollableWidth = wrapper.scrollWidth - wrapper.clientWidth;
      if (scrollableWidth <= 0) {
        thumb.style.display = "none";
        return;
      }
      thumb.style.display = "block";
      const scrollPercentage = (wrapper.scrollLeft / scrollableWidth);
      const trackWidth = track.clientWidth;
      const thumbWidth = thumb.clientWidth;
      const maxThumbLeft = trackWidth - thumbWidth;
      const thumbLeft = scrollPercentage * maxThumbLeft;
      thumb.style.left = `${thumbLeft}px`;
      progress.style.width = `${thumbLeft + (thumbWidth / 2)}px`;
    };

    const handleThumbDragStart = (e: MouseEvent | TouchEvent) => {
      e.stopPropagation();
      const { pageX } = getCoords(e);
      dragState.current.isThumbDown = true;
      dragState.current.thumbStartX = pageX;
      dragState.current.initialScrollLeft = wrapper.scrollLeft;
      dragState.current.lockDirection = "horizontal";
    };


    wrapper.addEventListener("mousedown", handleDragStart);
    wrapper.addEventListener("touchstart", handleDragStart, { passive: true });

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("touchmove", handleDragMove, { passive: false });

    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    wrapper.addEventListener("mouseleave", handleDragCancel);
    window.addEventListener("blur", handleDragCancel);
    window.addEventListener("touchcancel", handleDragCancel);

    wrapper.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    thumb.addEventListener("mousedown", handleThumbDragStart);
    thumb.addEventListener("touchstart", handleThumbDragStart, { passive: true });

    updateScrollbar();

    return () => {
      wrapper.removeEventListener("mousedown", handleDragStart);
      wrapper.removeEventListener("touchstart", handleDragStart);

      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("touchmove", handleDragMove);

      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);

      wrapper.removeEventListener("mouseleave", handleDragCancel);
      window.removeEventListener("blur", handleDragCancel);
      window.removeEventListener("touchcancel", handleDragCancel);

      wrapper.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);

      thumb.removeEventListener("mousedown", handleThumbDragStart);
      thumb.removeEventListener("touchstart", handleThumbDragStart);

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