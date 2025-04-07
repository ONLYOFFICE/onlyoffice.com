export interface IStarsRatingLogo {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The link URL. */
  url: string;
  /** The image. */
  image: {
    /** The image URL. */
    url: string;
    /** The image alternative text. */
    alt: string;
    /** The image width. */
    width: number;
    /** The image height. */
    height: number;
  };
  /** The rating value. */
  value: number;
  /** The maximum value. */
  maxValue?: number;
}
