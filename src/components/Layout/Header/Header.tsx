import { StyledHeader } from "./Header.styled";
import { useRef, useEffect, useState } from "react";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const headerRefCurrent = headerRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });

    if (headerRefCurrent) {
      observer.observe(headerRefCurrent);
    }

    return () => {
      if (headerRefCurrent) {
        observer.unobserve(headerRefCurrent);
      }
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
