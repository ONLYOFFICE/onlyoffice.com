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
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");
    const [currentType, setCurrentType] = useState(type);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputVariant, setInputVariant] = useState(variant);
    const rightSide =
      type == "password" || (type == "text" && id == "search") ? true : false;

    useEffect(() => {
      setInputValue(value || "");
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const validateInput = (value: string) => {
      if (required && !value.trim()) {
        return "error";
      }
      return value.trim() ? "success" : "default";
    };

    const handleBlur = () => {
      setIsFocused(false);
      const newVariant = validateInput(inputValue?.toString() || "");
      setInputVariant(newVariant);
      setErrorMessage(newVariant === "error" ? `${label} is empty` : "");
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
      if (id === "password") {
        togglePasswordVisibility();
      } else {
        setInputValue("");
        setInputVariant("default");
      }
    };

    const isFloating =
      isFocused ||
      (inputValue !== undefined && inputValue.toString().length > 0);

    return (
      <StyledInputWrapper $variant={inputVariant} $fullWidth={fullWidth}>
        <StyledInputLabel
          htmlFor={id}
          $isFloating={isFloating}
          $variant={inputVariant}
        >
          {label}
          {required && <span>*</span>}
        </StyledInputLabel>
        <StyledInput
          id={id}
          ref={ref}
          className={className}
          tabIndex={tabIndex}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          placeholder={isFocused ? placeholder : ""}
          required={required}
          type={currentType}
          value={inputValue}
          $fullWidth={fullWidth}
          $hasRightSide={!!rightSide}
        />
        {rightSide && (
          <StyledToggleButton
            $id={id}
            type="button"
            $type={currentType}
            onClick={onButtonToggle}
            aria-label={
              currentType === "password"
                ? "Show password"
                : currentType === "text" && id === "password"
                ? "Hide password"
                : ""
            }
          />
        )}
        {inputVariant === "error" && (
          <StyledErrorText>{errorMessage}</StyledErrorText>
        )}
      </StyledInputWrapper>
    );
  },
);

Input.displayName = "Input";

export { Input };
