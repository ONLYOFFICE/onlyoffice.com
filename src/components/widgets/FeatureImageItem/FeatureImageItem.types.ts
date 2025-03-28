export interface IFeatureImageItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The title. */
  title: string;
  /** The text. */
  text: string;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
  /** The image.  */
  image: { url: string; url2x?: string; /**Default: 504 */ height?: number };
  /** The text content position. Default: "left" */
  position?: "left" | "right";
}
