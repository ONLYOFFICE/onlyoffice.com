export interface IStarsRatingLogo {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The link URL. */
  url: string;
  /** The image URL. */
  imgUrl: string;
  /** The image alternative text. */
  imgAlt: string;
  /** The image width. */
  imgWidth: number;
  /** The image height. */
  imgHeight: number;
  /** The rating value. */
  value: number;
  /** The maximum value. */
  maxValue?: number;
}
