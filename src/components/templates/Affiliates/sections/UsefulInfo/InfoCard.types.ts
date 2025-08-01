export interface ICustomBlogCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading. */
  heading: { label: string; href?: string; isExternal?: boolean };
  /** The text. */
  text: { label: React.ReactNode; textLink?: string };
  /** The links. */
  links?: {
    href: string;
    label: string;
    isExternal?: boolean;
    isDownload?: boolean;
  }[];
}
