export interface IFeatureItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The variant. Default: "vertical". */
  variant?: "horizontal" | "vertical";
  /** The icon. */
  icon: {
    /** The icon url. */
    url: string;
    /** Horizontal positioning of the icon. Default: "0px". */
    positionX?: string;
    /** Vertical positioning of the icon. Default: "center". */
    positionY?: string;
    /** Horizontal mobile positioning of the icon. Default: "0px". */
    mobilePositionX?: string;
  };
  /** The heading. */
  heading?: string;
  /** The text */
  text: React.ReactNode;
  /** The links */
  links?: { href: string; isExternal?: boolean }[];
}
