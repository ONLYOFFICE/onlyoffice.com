import { IInput } from "@src/components/ui/Input";
import { ILoaderButton } from "@src/components/ui/LoaderButton";

export interface ISubscribeInput {
  /** Unique identifier used for testing (data-testid attribute) */
  dataTestId: string;
  /** The current value of the input field */
  value: IInput["value"];
  /** Optional label displayed above the input field */
  label?: IInput["label"];
  /** Placeholder text displayed inside the input field */
  placeholder?: IInput["placeholder"];
  /** Status of the input/button (e.g. "default", "loading", "success", "error") */
  status?: ILoaderButton["status"];
  /** Disables the input field and submit button if true */
  disabled?: ILoaderButton["disabled"];
  /** Optional caption text displayed below the input field */
  caption?: IInput["caption"];
  /** Automatically focuses the input when the component mounts */
  autoFocus?: IInput["autoFocus"];
  /** Content rendered inside the submit button (e.g. text or icon) */
  buttonContent?: React.ReactNode;
  /** The button variant: "primary" (text), "secondary" (arrow only), "tertiary" (text, arrow on mobile). Default: "primary". */
  variant?: ILoaderButton["variant"];
  /** Handler called when the input value changes */
  onChange: IInput["onChange"];
  /** Optional handler called when the input gains focus */
  onFocus?: IInput["onFocus"];
  /** Optional handler called when the input loses focus */
  onBlur?: IInput["onBlur"];
  /** Optional handler called when the submit button is clicked */
  onSubmit?: () => void;
}
