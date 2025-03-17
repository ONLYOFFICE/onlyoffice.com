interface ICardLink {
  /** Unique identifier for the link */
  id: string;
  /** Translation key for the link text */
  name: string;
  /** URL the link points to */
  url: string;
}

interface ICardContent {
  /** URL of the card's image */
  imgUrl: string;
  /** Translation key for the card's heading */
  heading: string;
  /** Translation key for the card's description */
  text: string;
  /** Array of related links for the card */
  links: ICardLink[];
}

export interface IGetStarted {
  /** Array of standard-sized cards */
  items: ICardContent[];
  /** Array of larger cards */
  largeItems: ICardContent[];
}
