import { useState } from "react";
import {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorInputWrapper,
  StyledCounterSelectorInput,
  StyledCounterSelectorValue,
} from "./CounterSelector.styled";
import { ICounterSelector } from "./CounterSelector.types";
import { DashIcon, PlusIcon } from "@src/components/icons";

const CounterSelector = ({
  id,
  className,
  variant = "default",
  size = "medium",
  bgColor,
  value,
  autoFocus,
  items,
  selected,
  onChange,
}: ICounterSelector) => {
  const hasItems = Array.isArray(items) && items.length > 0;

  const [inputValue, setInputValue] = useState<string>(value || "1");
  const currentIndex = hasItems
    ? items.findIndex((item) => item.id === selected)
    : -1;

  const increment = () => {
    if (hasItems) {
      if (currentIndex < items.length - 1) {
        onChange?.(items[currentIndex + 1].id);
      }
    } else {
      setInputValue((prev) => {
        const newValue = (parseInt(prev, 10) + 1).toString();
        onChange?.(newValue);
        return newValue;
      });
    }
  };

  const decrement = () => {
    if (hasItems) {
      if (currentIndex > 0) {
        onChange?.(items[currentIndex - 1].id);
      }
    } else {
      setInputValue((prev) => {
        const newValue = Math.max(1, parseInt(prev, 10) - 1).toString();
        onChange?.(newValue);
        return newValue;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/\D/g, "");

    if (numeric.length > 4) {
      return;
    }

    const num = parseInt(numeric, 10);

    if (!isNaN(num)) {
      const newValue = num.toString();
      setInputValue(newValue);
      onChange?.(newValue);
    } else {
      setInputValue("1");
      onChange?.("1");
    }
  };

  return (
    <StyledCounterSelector
      id={id}
      className={className}
      $variant={variant}
      $size={size}
      $bgColor={bgColor}
    >
      <StyledCounterSelectorBtn
        onClick={decrement}
        disabled={hasItems ? currentIndex <= 0 : parseInt(inputValue, 10) <= 1}
        $size={size}
      >
        <DashIcon />
      </StyledCounterSelectorBtn>

      {variant === "input" ? (
        <StyledCounterSelectorInputWrapper>
          <StyledCounterSelectorInput
            status="success"
            value={hasItems ? items[currentIndex]?.label || "" : inputValue}
            onChange={handleInputChange}
            autoFocus={autoFocus}
            maxLength={4}
          />
        </StyledCounterSelectorInputWrapper>
      ) : (
        <StyledCounterSelectorValue>
          {hasItems ? items[currentIndex]?.label : inputValue}
        </StyledCounterSelectorValue>
      )}

      <StyledCounterSelectorBtn
        onClick={increment}
        disabled={hasItems ? currentIndex >= items.length - 1 : false}
        $size={size}
      >
        <PlusIcon />
      </StyledCounterSelectorBtn>
    </StyledCounterSelector>
  );
};

export { CounterSelector };
