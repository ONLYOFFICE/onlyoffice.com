import { ILocale } from "@src/types/locale";

export interface IPlanCard {
  locale: ILocale["locale"];
  heading: string;
  subHeading: string;
  headingLabel?: string;
  isActive?: boolean;
  price: {
    from?: boolean;
    free?: boolean;
    prev?: number;
    current?: number;
    label?: string;
  };
  btn: {
    dataTestId?: string;
    label: string;
    url?: string;
    onClick?: () => void;
  };
  link?: {
    label: string;
    url: string;
  };
}
