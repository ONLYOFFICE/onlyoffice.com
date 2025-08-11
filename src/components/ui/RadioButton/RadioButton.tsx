import { IRadioButton } from "./RadioButton.types";
import { StyledHeroRadioInput, StyledHeroRadioLabel } from "./RadioButton.styled";

const RadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  status = "default",
  onChange,
}: IRadioButton) => {
  return (
    <>
      <StyledHeroRadioInput
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <StyledHeroRadioLabel
        htmlFor={id}
        $status={status}
        $checked={checked}
      >
        {label}
      </StyledHeroRadioLabel>
    </>
  );
};

export { RadioButton };