interface IFaqLink {
  /** Faq link's href */
  href: string;
}

export interface IFaq {
  /** Faq label */
  label: string;
  /** Translation key for the Faq description */
  text: string;
  /** Faq description links */
  links?: IFaqLink[];
}
