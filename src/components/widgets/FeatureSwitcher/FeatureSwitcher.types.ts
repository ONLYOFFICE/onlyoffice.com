export interface IFeatureSwitcher {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** An array of image tabs. */
  items: {
    label: React.ReactNode;
    images: { url: string; url2x?: string };
  }[];
  /** The width of the image. Default: 736. */
  imageWidth?: number;
  /** The height of the image. Default: 520. */
  imageHeight?: number;
  /** The position of the tabs. Default: "left". */
  position?: "left" | "right";
  /** Custom button displayed below the tabs. */
  customButton?: React.ReactNode;
}
