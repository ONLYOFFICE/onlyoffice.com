import { forwardRef } from "react";
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
      align = "top",
      size,
      disabled,
      onChange,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledCheckbox $align={align} $disabled={disabled}>
        <StyledCheckboxInput
          ref={ref}
          id={id}
          className={className}
          type="checkbox"
          tabIndex={tabIndex}
          checked={checked}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
          $checked={checked}
          disabled={disabled}
          {...rest}
        />
        <StyledCheckboxIcon $checked={checked} />
        <StyledCheckboxLabel $size={size}>{label}</StyledCheckboxLabel>
      </StyledCheckbox>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
