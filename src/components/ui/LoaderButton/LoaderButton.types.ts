export interface ILoaderButton {
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
  type?: "button" | "submit";
  /** If true, it will stretch to fill the container's width. */
  fullWidth?: boolean;
  /** The visual style status. Default: "default". */
  status?: "default" | "loading" | "success" | "error";
  /** The size. Default: "medium". */
  size?: "small" | "medium";
  /** Callback function triggered on click. */
  onClick?: () => void;
}
