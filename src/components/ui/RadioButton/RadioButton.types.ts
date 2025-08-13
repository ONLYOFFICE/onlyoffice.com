/**
 * Props for the RadioButton component.
 */
interface IRadioButton {
  /** Unique identifier for the radio input element, required for htmlFor attribute in label */
  id: string;
  /** Name of the radio group; all radio buttons with the same name are grouped */
  name: string;
  /** Value associated with this radio option */
  value: string;
  /** Optional text label displayed next to the radio button */
  label?: string;
  /** Whether the radio button is currently selected */
  checked: boolean;
  /** Whether the radio button is disabled and non-interactive */
  disabled?: boolean;
  /** Visual status of the component, e.g., for showing error styling */
  status?: "default" | "error";
  /** Callback fired when the user selects this radio option */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRadioButton };
