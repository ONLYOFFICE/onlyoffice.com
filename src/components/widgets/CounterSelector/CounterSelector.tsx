import { useState } from "react";
import {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorInput,
  StyledCounterSelectorLabel,
  StyledCounterSelectorValue,
} from "./CounterSelector.styled";
import { ICounterSelector } from "./CounterSelector.types";
import { DashIcon, PlusIcon } from "@src/components/icons";

const CounterSelector = <T extends string>({
  id,
  className,
  variant = "default",
  buttonSize = "large",
  valueSize = "medium",
  label,
  bgColor,
  autoFocus,
  value = "1",
  items,
  selected,
  onChange,
}: ICounterSelector<T>) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 9999;
  const hasItems = Array.isArray(items) && items.length > 0;

  const [inputValue, setInputValue] = useState<string>(() => {
    return !hasItems ? value : "1";
  });

  const currentIndex = hasItems
    ? items.findIndex((item) => item.id === selected)
    : -1;

  const increment = () => {
    if (hasItems) {
      if (currentIndex < items.length - 1) {
        onChange?.(items[currentIndex + 1].id as T);
      }
    } else {
      const next = parseInt(inputValue, 10) + 1;
      if (next <= MAX_VALUE) {
        const newValue = next.toString();
        setInputValue(newValue);
        onChange?.(newValue as T);
      }
    }
  };

  const decrement = () => {
    if (hasItems) {
      if (currentIndex > 0) {
        onChange?.(items[currentIndex - 1].id as T);
      }
    } else {
      const next = Math.max(MIN_VALUE, parseInt(inputValue, 10) - 1);
      const newValue = next.toString();
      setInputValue(newValue);
      onChange?.(newValue as T);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, "");

    if (numeric === "" || numeric === "0") {
      setInputValue(MIN_VALUE.toString());
      onChange?.(MIN_VALUE.toString() as T);
      return;
    }

    const num = Math.min(MAX_VALUE, Math.max(MIN_VALUE, parseInt(numeric, 10)));
    const newValue = num.toString();

    setInputValue(newValue);
    onChange?.(newValue as T);
  };

  const displayValue = hasItems ? items[currentIndex]?.label || "" : inputValue;

  return (
    <StyledCounterSelector
      id={id}
      className={className}
      $label={label}
      $bgColor={bgColor}
    >
      <StyledCounterSelectorBtn
        onClick={decrement}
        disabled={
          hasItems ? currentIndex <= 0 : parseInt(inputValue, 10) <= MIN_VALUE
        }
        $buttonSize={buttonSize}
      >
        <DashIcon />
      </StyledCounterSelectorBtn>

      {variant === "input" ? (
        <StyledCounterSelectorInput
          $valueSize={valueSize}
          status="success"
          value={displayValue}
          onChange={handleInputChange}
          autoFocus={autoFocus}
          maxLength={4}
        />
      ) : (
        <div>
          <StyledCounterSelectorLabel>{label}</StyledCounterSelectorLabel>
          <StyledCounterSelectorValue $valueSize={valueSize}>
            {displayValue}
          </StyledCounterSelectorValue>
        </div>
      )}

      <StyledCounterSelectorBtn
        onClick={increment}
        disabled={
          hasItems
            ? currentIndex >= items.length - 1
            : parseInt(inputValue, 10) >= MAX_VALUE
        }
        $buttonSize={buttonSize}
      >
        <PlusIcon />
      </StyledCounterSelectorBtn>
    </StyledCounterSelector>
  );
};

export { CounterSelector };
