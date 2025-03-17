export interface ILink {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The text label. If both `children` and `label` are provided, `children` will take precedence. */
  label?: string;
  /** Content to be rendered inside. If both `children` and `label` are provided, `children` will take precedence. */
  children?: React.ReactNode;
  /** The URL the link points to. */
  href?: string;
  /** Specifies the relationship between the current page and the linked page. */
  rel?: string;
  /** If `true`, the link will be treated as a downloadable file. */
  download?: boolean;
  /** The MIME type of the linked resource. */
  type?: string;
  /** Specifies where to open the linked document. Default: "_blank". */
  target?: "_self" | "_blank" | "_parent" | "_top";
  /** The tab index of the link, which controls its keyboard navigation order. */
  tabIndex?: number;
  /** CSS display property. */
  display?: "block" | "inline-block" | "flex" | "inline-flex";
  /** The font size for styling. */
  fontSize?: string;
  /** The font weight for styling. Default: 400. */
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  /** The line height for styling. */
  lineHeight?: string;
  /** The color of the link text. Can be a predefined "main" or any custom color. */
  color?: "main" | string;
  /** The text transformation style. */
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /** If `true`, the text will be underlined. */
  textUnderline?: boolean;
  /** Specifies the hover style variant. */
  hover?: "color" | "underline" | "underline-none";
  /** Custom styles. */
  style?: React.CSSProperties;
}
