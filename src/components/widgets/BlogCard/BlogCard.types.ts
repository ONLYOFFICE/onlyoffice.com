export interface IBlogCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The image URL. */
  imgUrl: string;
  /** The heading. */
  heading: { label: string; href?: string; isExternal?: boolean };
  /** The text. */
  text?: string;
  /** The links. */
  links?: { href: string; label: string; isExternal?: boolean }[];
  /** The size of the card. */
  isLarge?: boolean;
  italicText?: string;
  quotesBefore?: string;
  quotesAfter?: string;
  author?: string;
}
