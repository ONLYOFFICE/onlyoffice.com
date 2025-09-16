export interface IButton {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text label. If both `children` and `label` are provided, `children` will take precedence. */
  label?: string;
  /** Content to be rendered inside. If both `children` and `label` are provided, `children` will take precedence. */
  children?: React.ReactNode;
  /** Indicates whether it is disabled. */
  disabled?: boolean;
  /** The tab index of the button, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** Specifies the type. Default: "button". */
  type?: "button" | "submit" | "reset";
  /** The title attribute. */
  title?: string;
  /** The element to render as. Default: "button". */
  as?: "button" | "a";
  /** The URL to link to. `href` is not allowed if `as` is "button" */
  href?: string;
  /** Specifies where to open the linked document. `target` is not allowed if `as` is "button". If `as` is `"a"` and `target` is `"_blank"`, and `rel` is not provided, it will default to `"noopener noreferrer"`. */
  target?: "_self" | "_blank" | "_parent" | "_top";
  /** If `true`, the link will be treated as a downloadable file. */
  download?: boolean;
  /** Specifies the relationship between the current page and the linked page. `rel` is not allowed if `as` is "button" */
  rel?: string;
  /** If true, it will stretch to fill the container's width. */
  fullWidth?: boolean;
  /** The visual style variant. Default: "primary". */
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  /** The size. Default: "medium". */
  size?: "small" | "medium";
  /** The border radius. Default: "9px". */
  borderRadius?: string;
  /** The background color. */
  backgroundColor?: string;
  /** The text transform. */
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /** The font size. */
  fontSize?: string;
  /** Callback function triggered on click. */
  onClick?: () => void;
}
