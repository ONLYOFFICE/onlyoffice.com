export interface IComparisonCard {
  /** Comparison card logo */
  logo: {
    /** Comparison card logo source */
    src: string;
    /** Comparison card logo alternative text */
    alt: string;
    /** Comparison card logo width */
    width: string;
    /** Comparison card logo height */
    height: string;
    /** Comparison card logo mobile width */
    mobileWidth?: string;
    /** Comparison card logo mobile height */
    mobileHeight?: string;
  };
  /** Comparison card text */
  text: string;
  /** Comparison card link */
  link: string;
}
