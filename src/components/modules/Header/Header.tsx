import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { OOHeader } from "onlyoffice-react-ui-kit/header";
import "onlyoffice-react-ui-kit/header/css";
import { IHeader } from "./Header.types";
import { languages } from "@src/config/data/languages";

const Header = ({ locale, theme, highlight, borderColor }: IHeader) => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
      <OOHeader
        locale={locale}
        borderColor={
          borderColor ?? (scrolled ? "#cccccc" : "transparent")
        }
        backgroundColor={scrolled ? "#ffffff" : "transparent"}
        languages={languages.map((language) => ({
          key: language.shortKey,
          shortKey: language.shortKey,
          name: language.name,
          href: router.asPath
        }))}
        search={{
          show: true,
          onSubmit: () => {},
          onChange: () => {},
          value: "",
          variant: "main",
        }}
        hasPhone={true}
        theme={theme === "white" ? (scrolled ? undefined : "white") : undefined}
        highlight={{
          buttonId: highlight?.buttonId,
          linkId: highlight?.linkId,
        }}
      />
    </>
  );
};

export { Header };
