export interface ISelectOption {
  /** Display label shown in the dropdown */
  label: string;
  /** Internal value associated with the option */
  value: string;
}

export interface ISelect {
  /** Currently selected options */
  selected: ISelectOption[];
  /** Function to update the selected options */
  setSelected: React.Dispatch<React.SetStateAction<ISelectOption[]>>;
  /** List of available options to select from */
  options: ISelectOption[];
  /** Label displayed above the select field */
  label?: string;
  /** Variant of the label */
  labelVariant?: "primary" | "secondary";
  /** Border radius of the select component */
  borderRadius?: string;
  /** Placeholder text displayed inside the input field */
  placeholder?: string;
  /** Disables interaction with the select component */
  disabled?: boolean;
  /** Displays an asterisk (*) to indicate the field is required */
  required?: boolean;
  /** Enables multiple option selection */
  multiple?: boolean;
  /** Shows the number of selected options (e.g., "(3)") */
  multipleCount?: boolean;
  /** Defines the status of the input field (default, success, or error) */
  status?: "default" | "success" | "error";
  /** Caption text displayed below the input field for error messages */
  caption?: string;
  /** Maximum width of the select component (e.g., "400px", "100%") */
  maxWidth?: string;
  /** Shows a "Reset" option to clear the selection */
  withReset?: boolean;
  /** Shows an icon next to the selected option */
  withSelectedIcon?: boolean;
}
