export interface IProduct {
  /** The title */
  title: string;
  /** The text */
  text: string;
  /** The link */
  link: {
    /** The link label */
    label: string;
    /** The link href */
    href: string;
  };
  /** The image */
  image: {
    /** The image url */
    imgUrl: string;
    /** The image url 2x */
    imgUrl2x: string;
    /** The image width */
    imgWidth: number;
    /** The image height */
    imgHeight: number;
  };
}
