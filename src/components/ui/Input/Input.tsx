import { forwardRef, useState, useEffect } from "react";
import {
  StyledInput,
  StyledInputWrapper,
  StyledInputLabel,
  StyledErrorText,
  StyledToggleButton,
} from "./Input.styled";
import { IInput } from "./Input.types";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      id,
      className,
      label,
      placeholder,
      tabIndex,
      variant = "default",
      type = "text",
      required,
      onFocus,
      onChange,
      onKeyDown,
      value,
      fullWidth,
      errorMessage,
      clearable,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value || undefined);
    const [currentType, setCurrentType] = useState(type);
    const [currentErrorMessage, setCurrentErrorMessage] =
      useState(errorMessage);
    const [inputVariant, setInputVariant] = useState(variant);
    const rightSide = type == "password" || type == "search" ? true : false;
    const leftSide = type === "search";

    useEffect(() => {
      setInputValue(value || undefined);
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const validateInput = (value: string) => {
      if (required && !value.trim()) {
        return "error";
      } else if (required && value.trim()) {
        return "success";
      }
      return "default";
    };

    const handleBlur = () => {
      setIsFocused(false);
      const newVariant = validateInput(inputValue?.toString() || "");
      setInputVariant(newVariant);
      setCurrentErrorMessage(newVariant === "error" ? `${label} is empty` : "");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange) onChange(e);
    };

    const togglePasswordVisibility = () => {
      setCurrentType((prevType) =>
        prevType === "password" ? "text" : "password",
      );
    };

    const onButtonToggle = () => {
      if (type === "password") {
        togglePasswordVisibility();
      } 
    };

    const onButtonClear = () => {
      setInputValue("");
      setInputVariant("default");
    };

    const isFloating =
      isFocused ||
      (inputValue !== undefined && inputValue.toString().length > 0);

    return (
      <StyledInputWrapper $variant={inputVariant} $fullWidth={fullWidth} $isFocused={isFocused}>
        {label && (
          <StyledInputLabel
            htmlFor={id}
            $isFloating={isFloating}
            $variant={inputVariant}
            $leftSide={leftSide}
          >
            {label}
            {required && <span>*</span>}
          </StyledInputLabel>
        )}
        {leftSide && (
          <StyledToggleButton
            type="button"
            $type={currentType}
            $leftSide={leftSide}
            aria-label="Search icon left"
          />
        )}
        <StyledInput
          id={id}
          ref={ref}
          className={className}
          tabIndex={tabIndex}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          placeholder={isFocused ? placeholder : undefined}
          required={required}
          type={currentType}
          value={inputValue}
          $fullWidth={fullWidth}
          $hasRightSide={!!rightSide}
          $hasLeftSide={!!leftSide}
          $label={label ? true : false}
        />
        {rightSide && !clearable && (
          <StyledToggleButton
            type="button"
            $type={currentType}
            onClick={onButtonToggle}
            aria-label={
              currentType === "password"
                ? "Show password"
                : "Hide password"
            }
          />
        )}
        {clearable && inputValue && (
          <StyledToggleButton
            type="button"
            $type={currentType}
            $clearable={clearable}
            onClick={onButtonClear}
            aria-label="Clear input"
          />
        )}
        {inputVariant === "error" && (
          <StyledErrorText>{currentErrorMessage}</StyledErrorText>
        )}
      </StyledInputWrapper>
    );
  },
);

Input.displayName = "Input";

export { Input };
