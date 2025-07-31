import { IInput } from "@src/components/ui/Input";
import { ILoaderButton } from "@src/components/ui/LoaderButton";

export interface ISubscribeInput {
  dataTestId?: string;
  value: IInput["value"];
  label?: IInput["label"];
  placeholder?: IInput["placeholder"];
  status?: ILoaderButton["status"];
  disabled?: ILoaderButton["disabled"];
  caption?: IInput["caption"];
  autoFocus?: IInput["autoFocus"];
  buttonContent?: React.ReactNode;
  onChange: IInput["onChange"];
  onFocus?: IInput["onFocus"];
  onBlur?: IInput["onBlur"];
  onSubmit?: () => void;
}
