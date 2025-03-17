import { ReactNode } from "react";

export interface IList {
  /** The list of features */
  items: { label: string | ReactNode }[];
  /** ClassName of the list */
  className?: string;
  /** The list item's font size */
  fontSize?: string;
  /** The type of bullet */
  bulletType?: "rhombus" | "check";
  /** The color of the list item */
  color?: string;
  /** The gap between list items */
  gap?: string;
  /** The line height of the list item */
  lineHeight?: string;
}
