import { forwardRef, useState } from "react";
import {
  StyledCheckbox,
  StyledCheckboxWrapper,
  StyledCheckboxLabel,
} from "./Checkbox.styled";
import { ICheckbox } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ id, label, tabIndex, checked, onChange }, ref) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      if (onChange) onChange(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === " " || e.key === "Enter") {
        handleChange({
          target: { checked: !currentChecked },
        } as React.ChangeEvent<HTMLInputElement>);
        e.preventDefault();
      }
    };

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : isChecked;

    return (
      <StyledCheckboxWrapper
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
        onClick={() =>
          handleChange({
            target: { checked: !currentChecked },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      >
        <input
          id={id}
          ref={ref}
          tabIndex={-1}
          type="checkbox"
          checked={currentChecked}
          onChange={handleChange}
          hidden
        />
        <StyledCheckbox $checked={currentChecked} />
        <StyledCheckboxLabel htmlFor={id}>{label}</StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    );
  },
);

Checkbox.displayName = "Checkbox";
export { Checkbox };