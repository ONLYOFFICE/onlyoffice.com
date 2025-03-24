import {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorValue,
} from "./CounterSelector.styled";
import { ICounterSelector } from "./CounterSelector.types";
import { DashIcon, PlusIcon } from "@src/components/icons";

const CounterSelector = ({
  id,
  className,
  items,
  selected,
  onChange,
}: ICounterSelector) => {
  const currentIndex = items.findIndex((item) => item.id === selected);

  const increment = () => {
    if (currentIndex < items.length - 1) {
      onChange?.(items[currentIndex + 1].id);
    }
  };

  const decrement = () => {
    if (currentIndex > 0) {
      onChange?.(items[currentIndex - 1].id);
    }
  };

  return (
    <StyledCounterSelector id={id} className={className}>
      <StyledCounterSelectorBtn
        onClick={decrement}
        disabled={currentIndex === 0}
      >
        <DashIcon />
      </StyledCounterSelectorBtn>

      <StyledCounterSelectorValue>
        {items[currentIndex]?.label}
      </StyledCounterSelectorValue>

      <StyledCounterSelectorBtn
        onClick={increment}
        disabled={currentIndex === items.length - 1}
      >
        <PlusIcon />
      </StyledCounterSelectorBtn>
    </StyledCounterSelector>
  );
};

export { CounterSelector };
