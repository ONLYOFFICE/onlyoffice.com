import { IEditorsItem } from "./sub-components/EditorsImageItem/EditorsImageItem.types";

export interface IEditorsFeatures {
  items: IEditorsItem[];
  /** The heading. */ 
  heading?: string | React.ReactNode;
  /** The text. */
  text?: string;

  buttons?: boolean;
  /** Additional CSS class names. */
  className?: string;
}
