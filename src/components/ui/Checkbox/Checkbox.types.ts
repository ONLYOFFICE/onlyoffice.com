import { HTMLAttributes } from "react";

export interface ICheckbox extends HTMLAttributes<HTMLInputElement> {
  /** The unique identifier for the input element. */
  id: string;
  /** The class name(s) applied to the input element. */
  className?: string;
  /** The type of the input. */
  type?: "checkbox";
  /** The label text. */
  label?: string;
  /** The tab index of the input, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** The checked property sets the checked state of a checkbox. */
  checked?: boolean;
  /** A callback function for the input change event. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
