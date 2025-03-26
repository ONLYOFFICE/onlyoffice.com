export interface IRoomHero {
  /** Hero title. */
  title: React.ReactNode;
  /** Hero text. */
  text: string;
  /** Hero button. */
  button: { id?: string; label: string; href: string };
  /** Hero list items. */
  items: { label: string }[];
  /** Hero image url. */
  imgUrl: string;
  /** Hero image url 2x. */
  imgUrl2x: string;
}
