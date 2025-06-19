import { StyledHeader } from "./Header.styled";
import { useRef, useEffect } from "react";
import { useHeaderStore } from "@src/store/useHeaderStore";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrolled = useHeaderStore((state) => state.scrolled);
  const setScrolled = useHeaderStore((state) => state.setScrolled);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (headerRef.current) {
          setScrolled(headerRef.current.getBoundingClientRect().bottom <= 0);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  return (
    <>
      <div ref={headerRef}></div>
      <StyledHeader $scrolled={scrolled}>{children}</StyledHeader>
    </>
  );
};

export { Header };
