import { TextareaHTMLAttributes } from "react";

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  /** The number of columns in the textarea. */
  cols?: number;
  /** The number of rows in the textarea. */
  rows?: number;
  /** The number max length in the textarea. */
  maxLength?: number;
  /** Boolean value that indicates whether the textarea is required. */
  required?: boolean;
  /** A callback function for the textarea focus event. */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** A callback function for the textarea keydown event. */
  onKeyDown?: () => void;
  /** A callback function for the textarea change event. */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
