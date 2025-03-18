import { ReactNode } from "react";
import { IList } from "../List/List.types";

export interface IRoomsHero {
  /** Hero title. */
  title: string | ReactNode;
  /** Hero text. */
  text: string;
  /** Hero button. */
  button: { id?: string; label: string; href: string };
  /** Hero list items. */
  items: IList["items"];
  /** Hero image url. */
  imgUrl: string;
  /** Hero image url 2x. */
  imgUrl2x: string;
  /** Hero image widht. */
  imgWidht?: number;
  /** Hero image height. Default: 730 */
  imgHeight?: number;
}
