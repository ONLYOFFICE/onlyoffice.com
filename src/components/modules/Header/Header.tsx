import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { OOHeader } from "onlyoffice-react-ui-kit/header";
import "onlyoffice-react-ui-kit/header/css";
import { IHeader } from "./Header.types";
import { languages } from "@src/config/data/languages";

const Header = ({
  locale,
  theme,
  highlight,
  borderColor = "transparent",
  backgroundColor = "transparent",
  onScrollBorderColor = "#cccccc",
  onScrollBackgroundColor = "#ffffff",
  onScrollChangeTheme = true,
}: IHeader) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    setSearchValue("");
  }, [router.asPath]);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <>
      <div ref={headerRef}></div>
      <OOHeader
        locale={locale}
        borderColor={scrolled ? onScrollBorderColor : borderColor}
        backgroundColor={scrolled ? onScrollBackgroundColor : backgroundColor}
        languages={languages.map((language) => ({
          key: language.shortKey,
          shortKey: language.shortKey,
          name: language.name,
          href: router.asPath,
        }))}
        search={{
          show: true,
          onSubmit: handleSubmit,
          onChange: (e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          },
          value: searchValue,
          variant: "main",
        }}
        hasPhone={true}
        theme={
          theme === "white"
            ? scrolled && onScrollChangeTheme
              ? undefined
              : "white"
            : undefined
        }
        highlight={{
          buttonId: highlight?.buttonId,
          linkId: highlight?.linkId,
        }}
      />
    </>
  );
};

export { Header };
