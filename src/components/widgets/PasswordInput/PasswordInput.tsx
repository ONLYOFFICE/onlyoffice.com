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
  dataTestId,
  value,
  label,
  required,
  caption,
  status,
}: IPasswordInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledPasswordInput
      onChange={onChange}
      onBlur={onBlur}
      data-testid={dataTestId}
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
