import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
interface IFeatureItemExtended extends Omit<IFeatureItem, "text"> {
  text: {
    label: React.ReactNode;
    links?: { href: string; isExternal?: boolean }[];
  };
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/ooxml.svg"),
    },
    heading: "MaximumCompatibility",
    text: { label: "MaximumCompatibilityText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/desktop_app.svg"),
    },
    heading: "DesktopApp",
    text: { label: "DesktopAppText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/docs_sheets_slides.svg"),
    },
    heading: "DocsSheetsSlides",
    text: { label: "DocsSheetsSlidesText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/collaborative.svg"),
    },
    heading: "Seamless",
    text: { label: "SeamlessText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/security.svg"),
    },
    heading: "DataSecurity",
    text: {
      label: "DataSecurityText",
      links: [{ href: "/private-rooms?from=comparison" }],
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/ai_helper.svg"),
    },
    heading: "AIHelper",
    text: { label: "AIHelperText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-microsoft-office-alternative/reasons/flexibility.svg"),
    },
    variant: "vertical",
    heading: "Flexibility",
    text: { label: "FlexibilityText" },
  },
];
