import { IInput } from "@src/components/ui/Input";

export interface IPasswordInput {
  onChange: IInput["onChange"];
  onBlur: IInput["onBlur"];
  value: IInput["value"];
  label: IInput["label"];
  required: IInput["required"];
  caption: IInput["caption"];
  status: IInput["status"];
}
