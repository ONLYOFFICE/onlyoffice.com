import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TI18n } from "@src/types/i18n";
import {
  StyledLanguageSelector,
  StyledLanguageSelectorButton,
  StyledLanguageSelectorList,
} from "./LanguageSelector.styled";
import languages from "@src/config/languages.json";
import { ArrowDownIcon, FlagIcon } from "@src/components/icons";

const LanguageSelector = ({ t }: TI18n) => {
  const router = useRouter();
  const buttonRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableItems = listRef.current?.querySelectorAll("a");
      const firstElement = focusableItems?.[0] as HTMLElement;
      const lastElement = focusableItems?.[
        focusableItems.length - 1
      ] as HTMLElement;

      if (document.activeElement === lastElement && !e.shiftKey) {
        setIsOpen(false);
      } else if (document.activeElement === firstElement && e.shiftKey) {
        setIsOpen(false);
      }

      if (document.activeElement === buttonRef.current && e.shiftKey) {
        setIsOpen(false);
      }
    }
  };

  return (
    <StyledLanguageSelector
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      id="language-selector"
    >
      <StyledLanguageSelectorButton
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
        $isOpen={isOpen}
        id="language-selector-button"
      >
        <FlagIcon className="flag-icon" />
        <ArrowDownIcon className="arrow-down-icon" />
      </StyledLanguageSelectorButton>

      {isOpen && (
        <StyledLanguageSelectorList ref={listRef} $isOpen={isOpen}>
          {languages.map((el) => (
            <li key={el.shortKey}>
              <Link
                onClick={() => setIsOpen(false)}
                className={router.locale === el.shortKey ? "active" : ""}
                href={router.asPath}
                locale={el.shortKey}
              >
                <span>{el.shortKey}</span> {t(el.name)}
              </Link>
            </li>
          ))}
        </StyledLanguageSelectorList>
      )}
    </StyledLanguageSelector>
  );
};

export { LanguageSelector };
