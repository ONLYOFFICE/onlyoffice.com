export interface IFeatureLinkItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The variant. Default: "vertical". */
  variant?: "horizontal" | "vertical";
  /** The custom padding. Default: vertical or horizontal padding. */
  customPadding?: string;
  /** List items */
  items?: { label: string }[];
  /** The icon. */
  icon: {
    /** The icon url. */
    url: string;
    /** Horizontal positioning of the icon. Default: "0px". */
    positionX?: string;
    /** Horizontal positioning of the icon for mobile. Default: "0px". */
    mobilePositionX?: string;
    /** Vertical positioning of the icon. Default: "center". */
    positionY?: string;
  };
  /** The heading. */
  heading?: string;
  /** The text */
  textList?: string[];
  /** The size of paragraph */
  textSize?: number;
  /** The URL link */
  linkUrl?: string;
  /** Specifies where to open the linked document. Default: "_blank". */
  target?: "_self" | "_blank" | "_parent" | "_top";
  /** The text link */
  linkText?: string;
}
