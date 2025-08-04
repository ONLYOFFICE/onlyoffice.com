import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";
import { useTranslation } from "next-i18next";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import {
  StyledPhoneInput,
  StyledPhoneInputLeftSide,
  StyledPhoneInputFlag,
  StyledPhoneInputCountries,
  StyledPhoneInputContriesWrapper,
  StyledPhoneInputContriesItem,
} from "./PhoneInput.styled";
import { IPhoneInputRef, IPhoneInput } from "./PhoneInput.types";
import { Input } from "@src/components/ui/Input";
import { countries } from "@src/config/data/countries";

const PhoneInput = forwardRef<IPhoneInputRef, IPhoneInput>(
  ({ id, className, status, onChange, onBlur }, ref) => {
    const { t } = useTranslation("PhoneInput");
    const { IPGeolocationInfo, setIPGeolocationInfo } = useIPGeolocationStore();
    const leftSideRef = useRef<HTMLButtonElement>(null);
    const countriesRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedKey, setSelectedCountry] = useState("US");

    const currentValue = countries.find(
      (item) => item.country === selectedKey,
    ) || {
      country: "US",
      countryCode: "+1",
    };
    const [inputValue, setInputValue] = useState(currentValue.countryCode);

    useEffect(() => {
      const selected = countries.find((item) => item.country === selectedKey);
      if (selected) {
        setInputValue(selected.countryCode);
      }
    }, [selectedKey]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        const defaultCountry = countries.find(
          (item) => item.country === selectedKey,
        ) || { countryCode: "+1" };
        setInputValue(defaultCountry.countryCode);
      },
    }));

    useEffect(() => {
      (async () => {
        try {
          if (IPGeolocationInfo.regionDbEntity.domain) {
            setSelectedCountry(IPGeolocationInfo.country);
            return;
          }

          const res = await fetch("/api/ip-geolocation");
          const data = await res.json();

          setSelectedCountry(data.country);
          setIPGeolocationInfo(data);
        } catch (error) {
          console.error("Error fetching IP:", error);
        }
      })();

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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [
      IPGeolocationInfo.country,
      IPGeolocationInfo.regionDbEntity.domain,
      setIPGeolocationInfo,
    ]);

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
                className={currentValue.country}
              />
            </StyledPhoneInputLeftSide>
          }
        />

        {isOpen && (
          <StyledPhoneInputCountries ref={countriesRef}>
            <StyledPhoneInputContriesWrapper>
              {countries.map((item, index) => (
                <li key={index}>
                  <StyledPhoneInputContriesItem
                    onClick={() => {
                      setSelectedCountry(item.country);
                      setInputValue(
                        `${item.countryCode} ${inputValue.replace(
                          /^\+?\d*\s*/,
                          "",
                        )}`,
                      );
                      setIsOpen(false);
                    }}
                  >
                    <StyledPhoneInputFlag
                      $isCountriesFlag
                      className={item.country}
                    />
                    {item.title}
                  </StyledPhoneInputContriesItem>
                </li>
              ))}
            </StyledPhoneInputContriesWrapper>
          </StyledPhoneInputCountries>
        )}
      </StyledPhoneInput>
    );
  },
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
