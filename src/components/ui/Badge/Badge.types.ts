export interface IBadge {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text label. If both `children` and `label` are provided, `children` will take precedence. */
  label?: string;
  /** Content to be rendered inside. If both `children` and `label` are provided, `children` will take precedence. */
  children?: React.ReactNode;
  /** The vertical alignment of the badge. Default: "text-top". */
  verticalAlign?:
    | "top"
    | "middle"
    | "bottom"
    | "text-top"
    | "text-bottom"
    | "sub"
    | "super";
}
