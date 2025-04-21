import { ILocale } from "@src/types/locale";

export interface ICertificateCard {
  date: string;
  heading: string;
  blogUrl: string;
  product: { label: string; url: string };
  imageUrl: string;
  locale?: ILocale["locale"];
  index?: number;
  handleClick?: (url: string, alt: string) => void;
}
