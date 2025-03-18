export interface ITextArea {
  /** The unique identifier for the textarea element. */
  id?: string;
  /** The class name(s) applied to the textarea element. */
  className?: string;
  /** The label text that will animate on focus. */
  label?: string;
  /** The placeholder text for the textarea. */
  placeholder?: string;
  /** The tab index of the textarea, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** The variant style of the textarea. Options include "default" or "success". */
  variant?: "default" | "success";
  /** Boolean value that indicates whether the textarea is required. */
  required?: boolean;
  /** The name attribute of the input element. */
  name?: string;
  /** The value attribute of the input element. */
  value?: string;
  /** If true, it will stretch to fill the container's width. */
  fullWidth?: boolean;
  /** A callback function for the textarea focus event. */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** A callback function for the textarea keydown event. */
  onKeyDown?: () => void;
  /** A callback function for the textarea change event. */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
