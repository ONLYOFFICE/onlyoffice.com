export interface ICodeButton {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Indicates whether it is disabled. */
  disabled?: boolean;
  /** Callback function triggered on click. */
  onClick?: () => void;
}
