import { forwardRef, useState, FC } from "react";
import { StyledTextArea, TextAreaWrapper, TextAreaLabel } from "./TextArea.styled";
import { ITextArea } from "./TextArea.types";

const TextArea: FC<ITextArea> = ({
  id,
  className,
  label,
  placeholder,
  tabIndex,
  variant: initialVariant,
  required,
  onFocus,
  onChange,
  onKeyDown,
  value,
}) => {
  const [variant, setVariant] = useState(initialVariant);
  const [isFocused, setIsFocused] = useState(false);
  const [textareaValue, setTextareaValue] = useState(value || "");

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const validateTextArea = (value: string) => {    
    return value.trim() ? "success" : "default";
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    const newVariant = validateTextArea(textareaValue?.toString() || '');
    setVariant(newVariant);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
    if (onChange) onChange(e);
  };

  const isFloating = isFocused || (textareaValue !== undefined && textareaValue.toString().length > 0);

  return (
    <TextAreaWrapper>
      {label && (
        <TextAreaLabel 
          htmlFor={id} 
          isFloating={isFloating} 
          variant={variant || 'default'}
        >
          {label}
          {required && <span>*</span>}
        </TextAreaLabel>
      )}
      <StyledTextArea
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
        value={textareaValue}
        cols={5}
        rows={3}
        maxLength={250}
      />
    </TextAreaWrapper>
  );
};

export { TextArea };