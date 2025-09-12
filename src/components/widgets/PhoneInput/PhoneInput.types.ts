import { IInput } from "@src/components/ui/Input";

export interface IPhoneInputRef {
  reset: () => void;
}

export interface IPhoneInput {
  id?: string;
  className?: string;
  required?: boolean;
  onChange: IInput["onChange"];
  onBlur?: IInput["onBlur"];
}
