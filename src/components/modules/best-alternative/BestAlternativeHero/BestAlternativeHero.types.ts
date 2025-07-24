import { IButton } from "@src/components/ui/Button/Button.types";

export interface IBestAlternativeHero {
  heading: React.ReactNode;
  comparisonLogos: {
    src: string;
    alt: string;
    type:
      | "onlyoffice"
      | "versus"
      | "adobe"
      | "google-docs"
      | "hancom"
      | "libreoffice"
      | "microsoft-office"
      | "wps"
      | "zoho";
  }[];
  buttons: {
    href: string;
    label: string;
    variant?: IButton["variant"];
  }[];
  text: string;
}
