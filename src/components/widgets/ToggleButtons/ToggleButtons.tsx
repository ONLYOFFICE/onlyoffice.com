import {
  StyledToggleButtons,
  StyledToggleButton,
} from "./ToggleButtons.styled";
import { IToggleButtons } from "./ToggleButtons.types";

const ToggleButtons = ({
  id,
  className,
  items,
  selected,
  onChange,
}: IToggleButtons) => {
  return (
    <StyledToggleButtons id={id} className={className}>
      {items.map((item) => (
        <StyledToggleButton
          key={item.id}
          onClick={() => onChange(item.id)}
          $selected={selected === item.id}
        >
          {item.label}
        </StyledToggleButton>
      ))}
    </StyledToggleButtons>
  );
};

export { ToggleButtons };
