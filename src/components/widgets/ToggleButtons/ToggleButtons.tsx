import {
  StyledToggleButtons,
  StyledToggleButton,
} from "./ToggleButtons.styled";
import { IToggleButtons } from "./ToggleButtons.types";

const ToggleButtons = <T extends string>({
  id,
  className,
  items,
  selected,
  onChange,
}: IToggleButtons<T>) => {
  return (
    <StyledToggleButtons id={id} className={className}>
      {items.map((item) => (
        <StyledToggleButton
          key={item.id}
          onClick={() => onChange?.(item.id as T)}
          $selected={selected === item.id}
          disabled={items.length === 1}
        >
          {item.label.leftSide && <span>{item.label.leftSide}</span>}
          <span>{item.label.name}</span>
          {item.label.rightSide && <span>{item.label.rightSide}</span>}
        </StyledToggleButton>
      ))}
    </StyledToggleButtons>
  );
};

export { ToggleButtons };
