export interface IContainer {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** Content to be rendered inside. */
  children: React.ReactNode;
  /** Maximum width of the container. Default: "1200px". */
  maxWidth?: string;
  /** Left and right spacing value for desktop screens. Default: "48px". */
  desktopSpacing?: string;
  /** Left and right spacing value for tablet screens. Default: "40px". */
  tabletSpacing?: string;
  /** Left and right spacing value for mobile screens. Default: "16px". */
  mobileSpacing?: string;
}
