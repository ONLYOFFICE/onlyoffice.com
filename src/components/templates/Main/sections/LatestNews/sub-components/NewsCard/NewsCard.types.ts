export interface INewsCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The heading. */
  heading: string;
  /** The link URL. */
  linkUrl: string;
  /** The link is external. */
  isExternalLink?: boolean;
  /** The image URL. */
  imgUrl: string;
  /** The date icon. */
  date: string;
  /** The start date. */
  startDate?: string;
  /** The end date. */
  endDate?: string;
  /** The webinar icon. */
  isWebinar?: boolean;
  /** The webinar time. */
  webinarTime?: string;
  /** The location icon. */
  location?: string;
}
