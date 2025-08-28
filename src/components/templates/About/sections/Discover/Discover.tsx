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
  const dragState = useRef<IAboutDragState>({
    isDown: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const itemsRef = useRef<HTMLElement[]>([]);
  itemsRef.current = [] as HTMLElement[];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = itemsRef.current;
    if (!wrapper || !items.length) return;

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      dragState.current.isDown = true;
      dragState.current.isDragging = false;
      dragState.current.startX = e.pageX - wrapper.offsetLeft;
      dragState.current.scrollLeft = wrapper.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState.current.isDown) return;

      const x = e.pageX - wrapper.offsetLeft;
      const walk = x - dragState.current.startX;

      if (Math.abs(walk) > 5) {
        dragState.current.isDragging = true;
      }

      if (dragState.current.isDragging) {
        wrapper.scrollLeft = dragState.current.scrollLeft - walk;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!dragState.current.isDown) return;

      const wasDragging = dragState.current.isDragging;

      dragState.current.isDown = false;
      dragState.current.isDragging = false;

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
    };

    const handleMouseLeaveAndBlur = () => {
      dragState.current.isDown = false;
      dragState.current.isDragging = false;
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mouseleave", handleMouseLeaveAndBlur);
    window.addEventListener("blur", handleMouseLeaveAndBlur);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mouseleave", handleMouseLeaveAndBlur);
      window.removeEventListener("blur", handleMouseLeaveAndBlur);
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
        <StyledDiscoverScrollbarTrack>
          <StyledDiscoverProgressFirstYear
            label={accumulateItems.at(0)?.year ?? ""}
            size={4}
          />
          <StyledDiscoverScrollbarProgress />
          <StyledDiscoverScrollbarThumb />
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