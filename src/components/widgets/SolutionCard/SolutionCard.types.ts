export interface ISolutionCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The image URL. */
  imgUrl: string;
  /** The heading. */
  heading?: string;
  /** The text. */
  text?: React.ReactNode;
  /** The links. */
  links?: { id: string; name: string; url: string }[];
  /** Custom link elements that can be passed as React nodes. */
  customLinks?: React.ReactNode;
  /** The large size. */
  large?: boolean;
}
