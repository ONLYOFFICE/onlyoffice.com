export interface ISocialButton {
  //** The id of the social button. */
  id?: string;
  //** The type of the social button. */
  type: "google" | "zoom" | "twitter" | "linkedin" | "facebook";
  //** The href of the social button. */
  href: string;
}
