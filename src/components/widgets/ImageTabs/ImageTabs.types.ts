export interface IImageTabs {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** An array of image tabs. Each tab can have images for multiple languages. Additional languages can be added with their respective locale keys (e.g., "fr", "de"). */
  items: {
    label: React.ReactNode;
    images: {
      en: { url: string; url2x?: string };
      [locale: string]: { url: string; url2x?: string };
    };
  }[];
  /** The position of the tabs. Default: "left". */
  position?: "left" | "right";
}
