import { forwardRef, useState } from "react";
import {
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
} from "./Checkbox.styled";
import { ICheckbox } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  (
    {
      id,
      className,
      label,
      tabIndex,
      checked,
      required,
      name,
      value,
      onChange,
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <StyledCheckbox>
        <StyledCheckboxInput
          ref={ref}
          id={id}
          className={className}
          type="checkbox"
          tabIndex={tabIndex}
          checked={isChecked}
          required={required}
          name={name}
          value={value}
          onChange={handleChange}
          $checked={isChecked}
        />
        <StyledCheckboxIcon $checked={isChecked} />
        <StyledCheckboxLabel>{label}</StyledCheckboxLabel>
      </StyledCheckbox>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
