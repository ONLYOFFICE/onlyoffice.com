import { IFeatureItem } from "@src/components/widgets/FeatureItem";

export interface IBestAlternativeReasons {
  heading: { label: React.ReactNode; maxWidth?: string };
  items: IFeatureItem[];
}
