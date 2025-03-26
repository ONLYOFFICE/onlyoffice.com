export interface IFeatureItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The icon. */
  icon: {
    /** The icon url. */
    url: string;
    /** Horizontal positioning of the icon. Default: "0px". */
    positionX?: string;
    /** Vertical positioning of the icon. Default: "center". */
    positionY?: string;
  };
  /** The heading. */
  heading: React.ReactNode;
}
