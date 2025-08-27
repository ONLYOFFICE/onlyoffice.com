import { useEffect, useState, useMemo, useRef } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { discoverFormatDate } from "./utils/discoverFormatDate";
import { discoverFormatYear } from "./utils/discoverFormatYear";
import { IAbout, IAbouts } from "../../About.types";
import { ILocale } from "@src/types/locale";

import {
  StyledDiscoverHeading,
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle,
  StyledDiscoverProgressFirstYear,
  StyledDiscoverProgressLastYear,
  StyledDiscoverProgressWrapper,
  StyledDiscoverSlideHeading,
  StyledDiscoverSlideText,
  StyledDiscoverWrapper,
  StyledDiscoverYearBlock,
  StyledDiscoverTop,
  StyledDiscoverTopYearText,
  StyledDiscoverBotList,
  StyledDiscoverBotItem,
} from "./Discover.styled";

const Discover = ({ abouts, locale }: IAbouts & ILocale) => {
  const { t } = useTranslation("about");
  const [items, setItems] = useState<IAbout[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    isDown: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

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
          const targetSection = target.closest(".slide") as HTMLElement | null;
          if (targetSection) {
            wrapper.scrollTo({
              left: targetSection.offsetLeft,
              behavior: "smooth"
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
  }, []);

  useEffect(() => {
    setItems(abouts.data);
  }, [abouts]);

  const uniqueYears = useMemo(() =>Array.from(new Set(
    items.map((item) => discoverFormatYear(item.date))
  )), [items]);

  return (
    <Section background="#F5F5F5">
      <StyledDiscoverHeading
        label={t("DiscoverHeading")}
        level={2}
        size={3}
        textAlign="center"
      />

      <StyledDiscoverWrapper ref={wrapperRef}>
        <StyledDiscoverYearBlock className="year-block">
          <StyledDiscoverTop>
            <StyledDiscoverTopYearText
              label="2025"
              color="#f46c2e"
            />
          </StyledDiscoverTop>
          <StyledDiscoverBotList>
            <StyledDiscoverBotItem className="slide">
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
          </StyledDiscoverBotList>
        </StyledDiscoverYearBlock>

        <StyledDiscoverYearBlock>
          <StyledDiscoverTop>
            <StyledDiscoverTopYearText label="2026" color="#f46c2e" />
          </StyledDiscoverTop>
          <StyledDiscoverBotList>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2026-09-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
            <StyledDiscoverBotItem>
              <StyledDiscoverSlideHeading
                label={discoverFormatDate("2025-08-27", locale)}
                level={3}
                size={5}
                color="#424242"
              />
              <StyledDiscoverSlideText>
                <Trans
                  t={t}
                  i18nKey={"TeamLab launched. It all began with the Community module, an internal network with blogs, forums, wiki, etc."}
                  components={{
                    p: <p />
                  }}
                />
              </StyledDiscoverSlideText>
            </StyledDiscoverBotItem>
          </StyledDiscoverBotList>
        </StyledDiscoverYearBlock>
      </StyledDiscoverWrapper>
      <StyledDiscoverProgressWrapper>
        <StyledDiscoverProgressFirstYear
          label={uniqueYears.at(0)}
          size={4}
        />
        <StyledDiscoverProgressBar />
        <StyledDiscoverProgressBarHandle />
        <StyledDiscoverProgressLastYear
          label={uniqueYears.at(-1)}
          size={4}
        />
      </StyledDiscoverProgressWrapper>
    </Section>
  );
};

export { Discover };