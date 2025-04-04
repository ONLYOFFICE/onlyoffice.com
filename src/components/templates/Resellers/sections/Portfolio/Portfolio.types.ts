export interface IPortfolio {
  /** The portfolio title */
  title: string;
  /** The portfolio text */
  text: string;
  /** The portfolio link */
  link: {
    /** The portfolio link label */
    label: string;
    /** The portfolio link href */
    href: string;
  };
  /** The portfolio image */
  image: {
    /** The portfolio image url */
    imgUrl: string;
    /** The portfolio image url 2x */
    imgUrl2x: string;
    /** The portfolio image width */
    imgWidth: number;
    /** The portfolio image height */
    imgHeight: number;
  };
}
