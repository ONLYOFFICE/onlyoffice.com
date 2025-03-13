import { FC, useState } from "react";
import { Input } from "../Input/Input";
import { PasswordWrapper, ToggleButton } from "./PasswordInput.styled";
import { IPasswordInput } from "./PasswordInput.types";

export const PasswordInput: FC<IPasswordInput> = ({
  id,
  className,
  label,
  placeholder,
  tabIndex,
  variant,
  required,
  onFocus,
  onChange,
  onKeyDown,
  value,
  showPasswordToggle = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordWrapper>
      <Input
        id={id}
        className={className}
        label={label}
        placeholder={placeholder}
        tabIndex={tabIndex}
        variant={variant}
        type={showPassword ? "text" : "password"}
        required={required}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        {...props}
      />
      {showPasswordToggle && (
        <ToggleButton
          type="button"
          onClick={togglePassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <img src={`/images/icons/pass-eye-${showPassword ? 'closed' : 'opened'}.svg`} style={{ position: 'relative', height: '24px' }} />
        </ToggleButton>
      )}
    </PasswordWrapper>
  );
};