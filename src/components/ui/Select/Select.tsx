import { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledSelect,
  StyledSelectInput,
  StyledSelectInputValue,
  StyledSelectInputCount,
  StyledSelectInputIcon,
  StyledSelectCaption,
  StyledSelectLabel,
  StyledSelectOptions,
  StyledSelectOption,
} from "./Select.styled";
import { ISelect, ISelectOption } from "./Select.types";

const Select = ({
  selected,
  setSelected,
  options,
  label,
  labelVariant = "primary",
  placeholder,
  disabled,
  required,
  multiple,
  multipleCount,
  status = "default",
  caption,
  maxWidth = "472px",
  withReset,
  withSelectedIcon,
  borderRadius = "9px"
}: ISelect) => {
  const { t } = useTranslation("Select");
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (option: ISelectOption) => {
    if (multiple) {
      if (selected.find((s) => s.value === option.value)) {
        setSelected((prev) => prev.filter((s) => s.value !== option.value));
      } else {
        setSelected((prev) => [...prev, option]);
      }
    } else {
      setSelected([option]);
    }

    setIsOpen(false);
  };

  const resetSelection = () => setSelected([]);

  const isSelected = (option: ISelectOption) =>
    selected.find((s) => s.value === option.value);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableItems = optionsRef.current?.querySelectorAll("button");
      const firstElement = focusableItems?.[0];
      const lastElement = focusableItems?.[focusableItems.length - 1];

      if (document.activeElement === lastElement && !e.shiftKey) {
        setIsOpen(false);
      } else if (document.activeElement === firstElement && e.shiftKey) {
        setIsOpen(false);
      }

      if (document.activeElement === inputRef.current && e.shiftKey) {
        setIsOpen(false);
      }
    }
  };

  return (
    <StyledSelect
      ref={selectRef}
      onKeyDown={handleKeyDown}
      $maxWidth={maxWidth}
    >
      <StyledSelectInput
        ref={inputRef}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        $isOpen={isOpen}
        $placeholder={selected.length === 0 && placeholder ? true : false}
        $status={status}
        $labelVariant={labelVariant}
        disabled={disabled}
        $borderRadius={borderRadius}
        type="button"
      >
        {label && (
          <StyledSelectLabel
            $isOpen={isOpen}
            $selected={selected.length > 0}
            $status={status}
            $labelVariant={labelVariant}
          >
            {label}
            {required && <span>*</span>}
          </StyledSelectLabel>
        )}
        <StyledSelectInputValue>
          {selected.length === 0 && isOpen
            ? placeholder
            : multiple
              ? selected.map((s) => s.label).join(", ")
              : selected[0]?.label}
        </StyledSelectInputValue>

        {multipleCount && selected.length > 0 && (
          <StyledSelectInputCount>({selected.length})</StyledSelectInputCount>
        )}
        <StyledSelectInputIcon
          $isOpen={isOpen}
          $selected={selected.length > 0}
          $status={status}
        />
      </StyledSelectInput>

      {caption && <StyledSelectCaption>{caption}</StyledSelectCaption>}

      {isOpen && (
        <StyledSelectOptions ref={optionsRef} $borderRadius={borderRadius}>
          {withReset && (
            <StyledSelectOption
              onClick={(e) => {
                e.stopPropagation();
                resetSelection();
                setIsOpen(false);
              }}
              $isReset
            >
              {t("Reset")}
            </StyledSelectOption>
          )}

          {options.map((option) => (
            <StyledSelectOption
              $isSelected={isSelected(option) ? true : false}
              $withSelectedIcon={withSelectedIcon}
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                toggleOption(option);
              }}
            >
              {option.label}
            </StyledSelectOption>
          ))}
        </StyledSelectOptions>
      )}
    </StyledSelect>
  );
};

export { Select };
