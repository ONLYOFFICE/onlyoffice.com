import { useRef, useState } from "react";
import { TI18n } from "@src/types/i18n";
import {
  StyledPhoneMenu,
  StyledPhoneButton,
  StyledPhoneDropdown,
  StyledPhoneLabel,
  StyledPhoneNumber,
  StyledPhoneLink,
} from "./PhoneMenu.styled";
import { PhoneIcon } from "@src/components/icons";

const PhoneMenu = ({ t }: TI18n) => {
  const buttonRef = useRef(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableItems = dropdownRef.current?.querySelectorAll("a");
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
    <StyledPhoneMenu
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      id="phone-menu"
    >
      <StyledPhoneButton
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        ref={buttonRef}
        id="phone-menu-button"
      >
        <PhoneIcon />
      </StyledPhoneButton>

      {isOpen && (
        <StyledPhoneDropdown $isOpen={isOpen} ref={dropdownRef}>
          <StyledPhoneLabel>{t("Ascensio System SIA")}</StyledPhoneLabel>
          <StyledPhoneNumber href="tel:+37163399867">
            <span>{t("Phone:")}</span> +371 63399867
          </StyledPhoneNumber>
          <StyledPhoneLink href="/call-back-form">
            {t("Request call")}
          </StyledPhoneLink>
        </StyledPhoneDropdown>
      )}
    </StyledPhoneMenu>
  );
};

export { PhoneMenu };
