import { forwardRef, useState, FC } from "react";
import { StyledInput, InputWrapper, InputLabel, ErrorText } from "./Input.styled";
import { IInput } from "./Input.types";

const Input: FC<IInput> = ({
  id,
  className,
  label,
  placeholder,
  tabIndex,
  variant: initialVariant,
  type,
  required,
  name,
  onFocus,
  onChange,
  onKeyDown,
  value,
}) => {
  const [variant, setVariant] = useState(initialVariant);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const validateInput = (value: string) => {
    if (required) {
      if (!value.trim()) {
        return "error";
      }
      return "success";
    }
    
    return value.trim() ? "success" : "default";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    const newVariant = validateInput(inputValue?.toString() || '');
    setVariant(newVariant);
    setErrorMessage(newVariant === "error" ? `${label} is empty` : "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  const isFloating = isFocused || (inputValue !== undefined && inputValue.toString().length > 0);

  return (
    <InputWrapper>
      {label && (
        <InputLabel 
          htmlFor={id} 
          isFloating={isFloating} 
          variant={variant || 'default'}
        >
          {label}
          {required && <span>*</span>}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        className={className}
        tabIndex={tabIndex}
        variant={variant}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        placeholder={isFocused ? placeholder : ''}
        required={required}
        type={type}
        value={inputValue}
      />
      {variant === 'error' && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export { Input };