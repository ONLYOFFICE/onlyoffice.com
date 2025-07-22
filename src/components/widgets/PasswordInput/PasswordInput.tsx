import { useState } from "react";
import {
  StyledPasswordInput,
  StyledPasswordInputButton,
} from "./PasswordInput.styled";
import { IPasswordInput } from "./PasswordInput.types";
import { EyeIcon, EyeCloseIcon } from "@src/components/icons";

const PasswordInput = ({
  onChange,
  onBlur,
  value,
  label,
  required,
  caption,
  status,
}: IPasswordInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const checkPasswordComplexity = (password: string) => {
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const digits = /[0-9]/;
    const specials = /[!@#$%^&*()_\-+=\\|/.,:;[\]{}]/;

    const isLower = lowercase.test(password);
    const isUpper = uppercase.test(password);
    const isDigit = digits.test(password);
    const isSpecial = specials.test(password);

    const rating = [isLower, isUpper, isDigit, isSpecial].filter(
      Boolean,
    ).length;

    if (password.length === 0) return "";
    if (password.length < 8) return "bad";
    if (password.length >= 10 && rating < 3) return "good";
    if (password.length >= 10 && rating >= 3) return "perfect";
    if (password.length >= 8 && rating === 1) return "bad";
    if (password.length >= 8 && rating > 1 && rating < 4) return "good";
    if (password.length >= 8 && rating === 4) return "perfect";

    return "";
  };

  return (
    <StyledPasswordInput
      $checkPasswordComplexity={checkPasswordComplexity(String(value))}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      label={label}
      required={required}
      caption={caption}
      status={status}
      type={showPassword ? "text" : "password"}
      rightSide={
        <StyledPasswordInputButton
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
        </StyledPasswordInputButton>
      }
    />
  );
};

export { PasswordInput };
