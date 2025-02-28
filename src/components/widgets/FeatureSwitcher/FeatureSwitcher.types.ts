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
  /** The position of the tabs. Default: "left". */
  position?: "left" | "right";
}
