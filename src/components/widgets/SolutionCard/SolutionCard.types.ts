export interface ISolutionCard {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The image URL. */
  imageUrl: string;
  /** The heading. */
  heading?: string;
  /** The text. */
  text?: React.ReactNode;
  /** The links. */
  links?: { name: string; url: string }[];
  /** Custom link elements that can be passed as React nodes. */
  customLinks?: React.ReactNode;
  /** The large size. */
  large?: boolean;
}
