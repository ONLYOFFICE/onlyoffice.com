import { forwardRef, useState, useEffect, useRef } from "react";
import {
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
  StyledInputBody,
  StyledInputField,
  StyledInputCaption,
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
      status = "default",
      type = "text",
      disabled,
      required,
      value,
      name,
      maxLength,
      pattern,
      autoFocus,
      active,
      caption,
      leftSide,
      rightSide,
      onClick,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const localRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (autoFocus && localRef.current) {
        localRef.current.focus();
        const length = localRef.current.value.length;
        localRef.current.setSelectionRange(length, length);
      }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <StyledInput>
        <StyledInputWrapper
          className="input-wrapper"
          ref={ref}
          $status={status}
          $isFocused={isFocused}
          $disabled={disabled}
        >
          {leftSide}

          <StyledInputBody>
            {label && (
              <StyledInputLabel
                htmlFor={id}
                $isFocused={isFocused}
                $value={value}
                $leftSide={leftSide}
                $active={active}
                $disabled={disabled}
              >
                {label}
                {required && <span>*</span>}
              </StyledInputLabel>
            )}

            <StyledInputField
              ref={localRef}
              id={id}
              className={className}
              placeholder={!label || isFocused ? placeholder : undefined}
              tabIndex={tabIndex}
              value={value}
              name={name}
              maxLength={maxLength}
              pattern={pattern}
              type={type}
              required={required}
              disabled={disabled}
              $isFocused={isFocused}
              $label={label}
              $leftSide={leftSide}
              $rightSide={rightSide}
              onClick={onClick}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={onKeyDown}
            />
          </StyledInputBody>

          {rightSide}
        </StyledInputWrapper>

        {status === "error" && caption && !isFocused && (
          <StyledInputCaption>{caption}</StyledInputCaption>
        )}
      </StyledInput>
    );
  },
);

Input.displayName = "Input";

export { Input };
