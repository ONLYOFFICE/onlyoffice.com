export interface IText {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Text label content. If both `children` and `label` are provided, `children` will take precedence. */
  label?: string;
  /** Content to be rendered inside. If both `children` and `label` are provided, `children` will take precedence. */
  children?: React.ReactNode;
  /** The type of element to render. Default: "p". */
  as?: React.ElementType;
  /** The size of the text. */
  size?: 1 | 2 | 3 | 4;
  /** CSS display property. Default: "block". */
  display?: "block" | "inline-block" | "inline" | "flex" | "inline-flex";
  /** The font size for styling. */
  fontSize?: string;
  /** The font weight for styling. Default: 400. */
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** The font style for styling. */
  fontStyle?: "italic";
  /** The line height for styling. */
  lineHeight?: string;
  /** The text color. */
  color?: string;
  /** The horizontal alignment of the text. */
  textAlign?: "left" | "center" | "right";
  /** The text transformation style. */
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /** Whether to underline the text. */
  textDecoration?: "underline";
  /** Whether to truncate the text. */
  truncate?: boolean;
}
