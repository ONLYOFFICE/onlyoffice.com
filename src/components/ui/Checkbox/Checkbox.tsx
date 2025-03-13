import { forwardRef, useState, FC } from "react";
import { StyledCheckbox, InputWrapper, InputLabel } from "./Checkbox.styled";
import { ICheckbox } from "./Checkbox.types";

const Checkbox: FC<ICheckbox> = ({
  id,
  label,
  tabIndex,
  type = "checkbox",
  checked,
  defaultChecked = false,
  onChange,
}) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      onChange && onChange(e);
    };
  
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : isChecked;
  
    return (
      <InputWrapper>
        <input
          id={id}
          tabIndex={tabIndex}
          type={type}
          checked={currentChecked}
          onChange={handleChange}
          hidden
        />
        <StyledCheckbox checked={currentChecked} onClick={() => handleChange({ target: { checked: !currentChecked } } as React.ChangeEvent<HTMLInputElement>)} />
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </InputWrapper>
  );
};

export { Checkbox };
