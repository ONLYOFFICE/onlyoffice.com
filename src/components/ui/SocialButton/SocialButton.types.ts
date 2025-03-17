export interface ISocialButton {
  /** The unique identifier. */
  id?: string;
  /** Additional CSS class names. */
  className?: string;
  /** The type of the social button. */
  platform: "google" | "zoom" | "x" | "linkedin" | "facebook";
  /** The href of the social button. */
  href: string;
}
