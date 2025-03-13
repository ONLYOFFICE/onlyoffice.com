import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  /** The unique identifier for the input element. */
  id: string;
  /** The class name(s) applied to the input element. */
  className?: string;
  /** The label text that will animate on focus. */
  label?: string;
  /** The placeholder text for the input. */
  placeholder?: string;
  /** The tab index of the input, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** The variant style of the input. Options include "default", "error" or "success". */
  variant?: "default" | "error" | "success";
  /** The type of the input. */
  type: "text" | "password";
  /** Boolean value that indicates whether the input is required. */
  required?: boolean;
  /** A callback function for the input focus event. */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** A callback function for the input keydown event. */
  onKeyDown?: () => void;
  /** A callback function for the input change event. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
