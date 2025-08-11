import { Container } from "@src/components/ui/Container";
import {
  StyledMainLeft,
  StyledMainLeftInner,
  StyledMainLeftItem,
  StyledMainRight,
  StyledMainWrapper,
  StyledSelect,
} from "./Main.styled";
import { items } from "./data/items";
import { useCallback, useEffect, useRef, useState } from "react";
import { Section } from "@src/components/ui/Section";

import { BlogAndSocialMediaPromotionTilesBlock } from "./sub-components/BlogAndSocialMediaPromotionTilesBlock";
import { VideosBlock } from "./sub-components/VideosBlock";
import { ScreenshotsBlock } from "./sub-components/ScreenshotsBlock";
import { LogoBlock } from "./sub-components/LogoBlock";
import { DescriptionBlock } from "./sub-components/DescriptionBlock";
import { useTranslation } from "next-i18next";
import type { ISelectOption } from "@src/components/ui/Select/Select.types";
import { Select } from "@src/components/ui/Select";
import { smoothScrollTo } from "./utils/scroll";

const Main = () => {
  const { t } = useTranslation("press-downloads");

  const [leftNavActiveSection, setLeftNavActiveSection] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>([]);

  const innerRef = useRef<HTMLUListElement>(null);

  const topHeight = 150;
  const scrollOffset = 50;

  const selectOptions = items.map((item) => ({
    label: t(item.label),
    value: item.id,
  }));

  const scrollToSection = useCallback(
    (itemId: string) => {
      const element = document.getElementById(itemId);
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const elementAbsoluteTop = elementRect.top + currentScrollTop;
      const targetScrollTop = elementAbsoluteTop - topHeight;

      smoothScrollTo(targetScrollTop, 250);
    },
    [topHeight],
  );

  const handleItemClick = useCallback(
    (itemId: string) => {
      setLeftNavActiveSection(itemId);
      scrollToSection(itemId);
    },
    [scrollToSection],
  );

  const handleSelectChange: React.Dispatch<
    React.SetStateAction<ISelectOption[]>
  > = useCallback(
    (selectedOrUpdater) => {
      const newSelected =
        typeof selectedOrUpdater === "function"
          ? selectedOrUpdater(selectedOptions)
          : selectedOrUpdater;

      if (newSelected.length > 0) {
        handleItemClick(newSelected[0].value);
      }
      setSelectedOptions(newSelected);
    },
    [selectedOptions, handleItemClick],
  );

  const updateActiveSection = useCallback(() => {
    let currentActiveSection = "";

    for (const item of items) {
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= topHeight + scrollOffset && rect.bottom >= topHeight) {
          currentActiveSection = item.id;
          break;
        }
      }
    }

    if (currentActiveSection !== leftNavActiveSection) {
      setLeftNavActiveSection(currentActiveSection);
    }
  }, [leftNavActiveSection, topHeight, scrollOffset]);

  const handleScroll = useCallback(() => {
    updateActiveSection();
  }, [updateActiveSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Section as="div">
      <Container>
        <StyledMainWrapper>
          <StyledSelect $isSelect={selectedOptions.length > 0}>
            <Select
              selected={selectedOptions}
              setSelected={handleSelectChange}
              options={selectOptions}
              label="Menu"
              labelVariant="secondary"
              maxWidth="100%"
            />
          </StyledSelect>
          <StyledMainLeft>
            <StyledMainLeftInner ref={innerRef}>
              {items.map((item) => (
                <StyledMainLeftItem
                  key={item.id}
                  $isActive={leftNavActiveSection === item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                  {t(item.label)}
                </StyledMainLeftItem>
              ))}
            </StyledMainLeftInner>
          </StyledMainLeft>
          <StyledMainRight>
            <DescriptionBlock id="description" />
            <LogoBlock id="logo" />
            <ScreenshotsBlock id="screenshots" />
            <VideosBlock id="video" />
            <BlogAndSocialMediaPromotionTilesBlock id="blog-and-social-media-promotion-tiles" />
          </StyledMainRight>
        </StyledMainWrapper>
      </Container>
    </Section>
  );
};

export { Main };
