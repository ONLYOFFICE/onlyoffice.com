export interface INewsItem {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading. */
  heading: string;
  /** The link URL. */
  linkUrl: string;
  /** The date. */
  date: string;
}
