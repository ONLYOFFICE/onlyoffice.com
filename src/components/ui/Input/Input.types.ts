export interface IInput {
  /** The unique identifier for the input field. */
  id?: string;
  /** Additional CSS class names for styling. */
  className?: string;
  /** Label text associated with the input field. */
  label?: string;
  /** Position of the label relative to the input field. Default: "default". */
  labelPosition?: "default" | "top";
  /** Placeholder text displayed inside the input field. */
  placeholder?: string;
  /** Specifies the tab order of the input field. */
  tabIndex?: number;
  /** Defines the status of the input field (default, success, or error). */
  status?: "default" | "success" | "error";
  /** Defines the variant of the input field (search or password). */
  variant?: "search" | "password";
  /** Specifies the type of the input field. */
  type?: "text" | "number" | "password" | "tel" | "email" | "search";
  /** Disables the input field when set to true. */
  disabled?: boolean;
  /** Marks the input field as required when set to true. */
  required?: boolean;
  /** The controlled value of the input field. */
  value: string;
  /** The default value of the input field (used for uncontrolled inputs). */
  defaultValue?: string;
  /** The name attribute for the input field. */
  name?: string;
  /** Automatically focuses the input field when the component mounts. */
  autoFocus?: boolean;
  /** Caption text displayed below the input field for error messages. */
  caption?: string;
  /** Left-side icon inside the input field. */
  leftSide?: React.ReactNode;
  /** Right-side icon inside the input field. */
  rightSide?: React.ReactNode;
  /** Displays a clear button inside the input field. */
  withClearButton?: boolean;
  /** Callback function triggered when the input field is clicked. */
  onClick?: () => void;
  /** Callback function triggered when the input value changes. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback function triggered when the input field gains focus. */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback function triggered when the input field loses focus. */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback function triggered when a key is pressed in the input field. */
  onKeyDown?: () => void;
}
