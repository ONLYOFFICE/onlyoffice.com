import { IFeatureImageItem } from "@src/components/widgets/FeatureImageItem";

export interface IEditorsItem extends IFeatureImageItem {
  links?: {
    label: string;
    href: string;
    isExternal?: boolean;
    isVideo?: boolean;
  }[];
}

export interface IEditorsImageItemProps {
  item: IEditorsItem;
  openVideo: (videoUrl: string) => void;
  className?: string;
}
