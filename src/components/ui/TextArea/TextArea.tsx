import { forwardRef, useState, useEffect } from "react";
import {
  StyledTextArea,
  StyledTextAreaLabel,
  StyledTextAreaField,
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
      status = "default",
      required,
      name,
      value,
      cols,
      rows,
      maxLength,
      fullWidth,
      onFocus,
      onBlur,
      onChange,
      onKeyDown,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
      setInputValue(value || "");
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
      if (onChange) onChange(e);
    };

    const isFloating =
      isFocused ||
      (inputValue !== undefined && inputValue.toString().length > 0);

    return (
      <StyledTextArea
        $status={status}
        $fullWidth={fullWidth}
        $isFocused={isFocused}
      >
        {label && (
          <StyledTextAreaLabel
            htmlFor={id}
            $isFloating={isFloating}
            $status={status}
          >
            {label}
            {required && <span>*</span>}
          </StyledTextAreaLabel>
        )}
        <StyledTextAreaField
          id={id}
          ref={ref}
          className={className}
          tabIndex={tabIndex}
          placeholder={isFocused ? placeholder : undefined}
          required={required}
          value={inputValue}
          name={name}
          cols={cols}
          rows={rows}
          maxLength={maxLength}
          $label={label ? true : false}
          $hasValue={inputValue ? true : false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
      </StyledTextArea>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
