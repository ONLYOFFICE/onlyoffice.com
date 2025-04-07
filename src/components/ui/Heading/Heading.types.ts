export interface IHeading {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text label. If both `children` and `label` are provided, `children` will take precedence. */
  label?: string;
  /** Content to be rendered inside. If both `children` and `label` are provided, `children` will take precedence. */
  children?: React.ReactNode;
  /** The color used for styling. */
  color?: "main" | string;
  /** The heading level, ranging from 1 to 6. Default: 1. */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The font size level, ranging from 1 to 7. */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** The text alignment. */
  textAlign?: "left" | "center" | "right";
  /** The text transformation style. */
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
