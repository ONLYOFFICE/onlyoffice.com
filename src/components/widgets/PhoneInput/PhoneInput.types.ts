import { IInput } from "@src/components/ui/Input";

export interface IPhoneInputRef {
  reset: () => void;
}

export interface IPhoneInput {
  id?: string;
  className?: string;
  status?: IInput["status"];
  onChange: IInput["onChange"];
  onBlur?: IInput["onBlur"];
}
