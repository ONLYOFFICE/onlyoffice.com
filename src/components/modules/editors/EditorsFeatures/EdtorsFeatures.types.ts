import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export interface IEditorsFeatures {
  items: IFeatureImageItem[];
  /** Whether to show buttons */
  buttons?: boolean;
}
