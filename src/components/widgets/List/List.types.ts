import { ReactNode } from "react";

export interface IList {
  //* The list of features */
  items: (string | ReactNode)[];
  //* Has bullet or not */
  isBullet?: boolean;
  //* The type of bullet */
  bulletType?: "rhombus" | "check";
  //* The color of the list item */
  color?: string;
  //* The padding bottom of the list item */
  paddingBottom?: string;
  //* The line height of the list item */
  lineHeight?: string;
}
