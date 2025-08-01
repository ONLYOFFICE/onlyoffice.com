import {
  StyledSubscribeInput,
  StyledSubscribeInputLoaderButton,
} from "./SubscribeInput.styled";
import { ISubscribeInput } from "./SubscribeInput.types";
import { Input } from "@src/components/ui/Input";

const SubscribeInput = ({
  dataTestId,
  value,
  label,
  placeholder,
  status,
  buttonContent,
  disabled,
  caption,
  autoFocus,
  onFocus,
  onBlur,
  onChange,
  onSubmit,
}: ISubscribeInput) => {
  return (
    <StyledSubscribeInput $status={status}>
      <Input
        data-testid={`${dataTestId}-input`}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        label={label}
        placeholder={placeholder}
        status={status === "loading" ? "default" : status}
        disabled={disabled}
        caption={caption}
        autoFocus={autoFocus}
      />
      <StyledSubscribeInputLoaderButton
        onClick={onSubmit}
        data-testid={`${dataTestId}-button`}
        status={status}
        disabled={disabled}
      >
        {buttonContent}
      </StyledSubscribeInputLoaderButton>
    </StyledSubscribeInput>
  );
};

export { SubscribeInput };
