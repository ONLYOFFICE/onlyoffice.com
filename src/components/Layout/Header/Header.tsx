import { StyledHeader } from "./Header.styled";
import { useRef, useEffect, useState } from "react";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

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
  }, []);

  return (
    <>
      <div ref={headerRef}></div>
      <StyledHeader $scrolled={scrolled}>{children}</StyledHeader>
    </>
  );
};

export { Header };
