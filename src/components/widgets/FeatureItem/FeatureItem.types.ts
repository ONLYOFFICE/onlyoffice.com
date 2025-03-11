export interface IFeatureItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The icon url. */
  icon: string;
  /** Horizontal positioning of the icon. Default: "0px". */
  iconPositionX?: string;
  /** Vertical positioning of the icon. Default: "center". */
  iconPositionY?: string;
  /** The heading. */
  heading: React.ReactNode;
}
