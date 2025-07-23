interface IFeatureItemIcon {
  /** The icon url. */
  url: string;
  /** Icon width. Default: "64px". */
  width?: string;
  /** Icon height. Default: "64px". */
  height?: string;
  /** Horizontal positioning of the icon. */
  positionX?: string;
  /** Vertical positioning of the icon. */
  positionY?: string;
  /** Icon width on mobile device. */
  mobileWidth?: string;
  /** Icon height on mobile device. */
  mobileHeight?: string;
  /** Horizontal positioning of the icon on mobile device. */
  mobilePositionX?: string;
  /** Vertical positioning of the icon on mobile device. */
  mobilePositionY?: string;
  /** Indicates if the icon is part of a sprite image. */
  isSprite?: boolean;
}

export interface IFeatureItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The variant layout for desktop. Default: "vertical". */
  variant?: "horizontal" | "vertical";
  /** The variant layout for mobile devices. Default: "vertical". */
  mobileVariant?:
    | "horizontal-icon-top"
    | "horizontal-icon-left"
    | "horizontal-icon-center"
    | "vertical";
  /** The icon. */
  icon: IFeatureItemIcon;
  /** Maximum width of the component. */
  maxWidth?: string;
  /** The heading. */
  heading?: React.ReactNode;
  /** The text */
  text: React.ReactNode;
  link?: { href: string; label: string; isExternal?: boolean };
}
