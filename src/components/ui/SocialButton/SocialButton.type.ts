export type SocialType =
  | "google"
  | "zoom"
  | "twitter"
  | "linkedin"
  | "facebook";

export interface ISocialButton {
  /** Icon url */
  icon: SocialType;
  /** Button url */
  href: string;
}
