import { forwardRef, useState, useEffect } from "react";
import {
  StyledTextArea,
  StyledTextAreaWrapper,
  StyledTextAreaLabel,
} from "./TextArea.styled";
import { ITextArea } from "./TextArea.types";

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  (
    {
      id,
      className,
      label,
      placeholder,
      tabIndex,
      variant = "default",
      required,
      onFocus,
      onChange,
      onKeyDown,
      value,
      fullWidth,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [textareaValue, setTextareaValue] = useState(value || "");

    useEffect(() => {
      setTextareaValue(value || "");
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(e.target.value);
      if (onChange) onChange(e);
    };

    const isFloating =
      isFocused ||
      (textareaValue !== undefined && textareaValue.toString().length > 0);

    return (
      <StyledTextAreaWrapper $variant={variant} $fullWidth={fullWidth}>
        {label && (
          <StyledTextAreaLabel
            htmlFor={id}
            $isFloating={isFloating}
            $variant={variant}
          >
            {label}
            {required && <span>*</span>}
          </StyledTextAreaLabel>
        )}
        <StyledTextArea
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
          value={textareaValue}
          cols={5}
          rows={3}
          maxLength={250}
          $fullWidth={fullWidth}
        />
      </StyledTextAreaWrapper>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
