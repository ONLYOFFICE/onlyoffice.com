export interface ICertificate {
  /** Certificate date */
  date: string;
  /** Certificate heading */
  heading: {
    /** Certificate heading label */
    label: string;
    /** Certificate heading link */
    link: string;
  };
  product: {
    /** Certificate product label */
    label: string;
    /** Certificate product link */
    link: string;
  };
  /** Certificate image */
  image: {
    /** Certificate image url */
    url: string;
    /** Certificate image height */
    height: number;
  };
}
