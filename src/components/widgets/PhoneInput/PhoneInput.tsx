import { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledPhoneInput,
  StyledPhoneInputLeftSide,
  StyledPhoneInputFlag,
  StyledPhoneInputCountries,
  StyledPhoneInputContriesWrapper,
  StyledPhoneInputContriesItem,
} from "./PhoneInput.styled";
import { Input, IInput } from "@src/components/ui/Input";
import { items } from "./data/items";

const PhoneInput = ({ id, className, status, onChange, onBlur }: IInput) => {
  const { t } = useTranslation("PhoneInput");
  const leftSideRef = useRef<HTMLButtonElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState({
    key: "US",
    countryCode: "+1",
  });
  const [inputValue, setInputValue] = useState(currentValue.countryCode);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        leftSideRef.current?.contains(target) ||
        countriesRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <StyledPhoneInput>
      <Input
        id={id}
        className={className}
        value={inputValue}
        label={t("Phone")}
        maxLength={50}
        pattern="^\+?\d{1,4}\s{0,}(\(\d{1,4}\))?\s{0,}(\d{1,5}\s{0,}-?){1,4}$"
        required
        active
        status={status}
        onFocus={() => setIsOpen(false)}
        onChange={handleChange}
        onBlur={onBlur}
        caption={t("PhoneIsEmpty")}
        leftSide={
          <StyledPhoneInputLeftSide
            ref={leftSideRef}
            onClick={() => setIsOpen(!isOpen)}
            $status={status}
          >
            <StyledPhoneInputFlag
              $isCurrentFlag
              $isOpen={isOpen}
              className={currentValue.key}
            />
          </StyledPhoneInputLeftSide>
        }
      />

      {isOpen && (
        <StyledPhoneInputCountries ref={countriesRef}>
          <StyledPhoneInputContriesWrapper>
            {items.map((item, index) => (
              <li key={index}>
                <StyledPhoneInputContriesItem
                  onClick={() => {
                    setCurrentValue(item);
                    setInputValue(
                      `${item.countryCode} ${inputValue.replace(
                        /^\+?\d*\s*/,
                        "",
                      )}`,
                    );
                    setIsOpen(false);
                  }}
                >
                  <StyledPhoneInputFlag $isCountriesFlag className={item.key} />
                  {item.title}
                </StyledPhoneInputContriesItem>
              </li>
            ))}
          </StyledPhoneInputContriesWrapper>
        </StyledPhoneInputCountries>
      )}
    </StyledPhoneInput>
  );
};

export { PhoneInput };
