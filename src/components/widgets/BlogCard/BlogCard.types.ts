export interface IBlogCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The URL. */
  url: string;
  /** The image URL. */
  imgUrl: string;
  /** The heading. */
  heading: string;
  /** The links. */
  links?: { href: string; label: string }[];
}
