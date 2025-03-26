import { ReactNode } from "react";

export interface IHero {
  /** The hero title */
  title: string | ReactNode;
  /** The hero text */
  text: string;
  /** The hero image */
  imgUrl: string;
  /** The hero image width */
  imgWidth: number;
  /** The hero image height */
  imgHeight: number;
}
