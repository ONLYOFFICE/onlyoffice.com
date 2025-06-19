import { IEditorsItem } from "./sub-components/EditorsImageItem/EditorsImageItem.types";

export interface IEditorsFeatures {
  items: IEditorsItem[];
  /** Whether to show buttons */
  buttons?: boolean;
}
