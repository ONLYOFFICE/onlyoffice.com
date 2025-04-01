export interface ICheckbox {
  /** The unique identifier for the input element. */
  id?: string;
  /** The class name(s) applied to the input element. */
  className?: string;
  /** The label text. */
  label: string;
  /** The tab index of the checkbox, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** The checked property sets the checked state of a checkbox. */
  checked?: boolean;
  /** Boolean value that indicates whether the input is required. */
  required?: boolean;
  /** The name attribute of the input element. */
  name?: string;
  /** The value attribute of the input element. */
  value?: string;
  /** The alignment of the label. Default: "top". */
  align?: "top" | "center";
  /** A callback function for the input change event. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
