export interface IFeatureTabs {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading of the image tabs. */
  heading?: React.ReactNode;
  /** The name of the bottom link. */
  linkName?: string;
  /** The href of the bottom link. */
  linkUrl?: string;
  /** An array of image tabs. Each tab can have images for multiple languages. Additional languages can be added with their respective locale keys (e.g., "fr", "de"). */
  items: {
    label: React.ReactNode;
    images: { url: string; url2x?: string };
  }[];
  /** The position of the tabs. Default: "left". */
  position?: "left" | "right";
}
