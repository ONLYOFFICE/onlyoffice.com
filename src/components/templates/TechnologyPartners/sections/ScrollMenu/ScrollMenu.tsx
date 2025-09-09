import { useTranslation } from "next-i18next";
import {
  DwnFourBlockBtn,
  DwnFourBlockBtns,
  StyledStickyBox,
} from "./ScrollMenu.styled";
import { items } from "./data/items";
import { useEffect, useRef, useState } from "react";

const ScrollMenu = () => {
  const { t } = useTranslation("technology-partners");
  const [activeSection, setActiveSection] = useState("part-software");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = document.querySelector("header")?.clientHeight || 80;
    const stickyHeight =
      document.querySelector(".sticky-box")?.clientHeight || 60;
    const totalOffset = headerHeight + stickyHeight;

    const y =
      element.getBoundingClientRect().top + window.scrollY - totalOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      for (const section of items.btnData) {
        const el = document.getElementById(section.id);
        if (el) {
          sectionRefs.current[section.id] = el;
          if (
            el.offsetTop <= scrollPos &&
            el.offsetTop + el.offsetHeight > scrollPos
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledStickyBox className="sticky-box">
      <DwnFourBlockBtns>
        {items.btnData.map((item, idx) => (
          <DwnFourBlockBtn
            as="button"
            key={idx}
            onClick={() => handleClick(item.id)}
            className={activeSection === item.id ? "active-block-btn" : ""}
          >
            {t(item.title)}
          </DwnFourBlockBtn>
        ))}
      </DwnFourBlockBtns>
    </StyledStickyBox>
  );
};

export { ScrollMenu };
