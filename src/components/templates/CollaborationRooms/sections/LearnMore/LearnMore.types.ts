export interface IItemLink {
  /** The key for the translation of the link URL. */
  href: string;
  /** The key for the translation of the link label. */
  label: string;
  /** The targer of the link. */
  target?: "_self";
}

export interface ILearnMoreItem {
  /** The URL of the item's image. */
  imgUrl: string;
  /** The key for the translation of the item's heading. */
  heading: string;
  /** The key for the translation of the item's text. */
  text: string;
  /** Array of links associated with the item. */
  links: IItemLink[];
}
