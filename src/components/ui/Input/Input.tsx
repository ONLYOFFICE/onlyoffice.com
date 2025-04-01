import { forwardRef, useState, useEffect, useRef } from "react";
import {
  StyledInput,
  StyledInputLabel,
  StyledInputIcon,
  StyledInputFieldWrapper,
  StyledInputField,
  StyledInputClearButton,
  StyledInputCaption,
} from "./Input.styled";
import { IInput } from "./Input.types";
import {
  CrossIcon,
  SearchIcon,
  EyeIcon,
  EyeCloseIcon,
} from "@src/components/icons";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      id,
      className,
      label,
      labelPosition = "default",
      placeholder,
      tabIndex,
      status = "default",
      variant,
      type = variant === "password" ? "password" : "text",
      disabled,
      required,
      value,
      name,
      autoFocus,
      caption,
      leftSide,
      rightSide,
      withClearButton,
      onClick,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
    },
    ref,
  ) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || localRef;

    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus, inputRef]);

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

    const handleClear = () => {
      onChange?.({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
      setIsFocused(false);
      inputRef.current?.focus();
    };

    return (
      <StyledInput>
        {label && (
          <StyledInputLabel
            htmlFor={id}
            $labelPosition={labelPosition}
            $isFocused={isFocused}
            $value={value}
            $leftSide={leftSide}
            $variant={variant}
          >
            {label}
            {required && <span>*</span>}
          </StyledInputLabel>
        )}

        <StyledInputFieldWrapper>
          <StyledInputField
            ref={inputRef}
            id={id}
            className={className}
            placeholder={isFocused ? placeholder : undefined}
            tabIndex={tabIndex}
            value={value}
            name={name}
            type={
              type === "password"
                ? passwordVisible
                  ? "password"
                  : "text"
                : type
            }
            required={required}
            disabled={disabled}
            $value={value}
            $label={label}
            $status={status}
            $isFocused={isFocused}
            $withClearButton={withClearButton}
            $leftSide={leftSide}
            $rightSide={rightSide}
            $variant={variant}
            $labelPosition={labelPosition}
            onClick={onClick}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={onKeyDown}
          />

          {(leftSide || variant === "search") && (
            <StyledInputIcon $leftSide={leftSide} $variant={variant}>
              {variant === "search" ? <SearchIcon /> : leftSide}
            </StyledInputIcon>
          )}

          {(rightSide || variant === "password") && (
            <StyledInputIcon
              $rightSide={rightSide}
              $variant={variant}
              onClick={() =>
                type === "password" && setPasswordVisible(!passwordVisible)
              }
            >
              {variant === "password" ? (
                passwordVisible ? (
                  <EyeIcon />
                ) : (
                  <EyeCloseIcon />
                )
              ) : (
                rightSide
              )}
            </StyledInputIcon>
          )}

          {value && (withClearButton || variant === "search") && (
            <StyledInputClearButton
              onClick={handleClear}
              $rightSide={rightSide}
              $withClearButton={withClearButton}
              $variant={variant}
            >
              <CrossIcon />
            </StyledInputClearButton>
          )}
        </StyledInputFieldWrapper>

        {status === "error" && caption && !isFocused && (
          <StyledInputCaption>{caption}</StyledInputCaption>
        )}
      </StyledInput>
    );
  },
);

Input.displayName = "Input";

export { Input };
