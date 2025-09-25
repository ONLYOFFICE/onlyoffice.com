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
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/open_source.svg"),
    },
    heading: "OpenSource",
    text: { label: "OpenSourceText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/desktop_app.svg"),
    },
    heading: "DesktopApp",
    text: { label: "DesktopAppText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/docs_sheets_slides.svg"),
    },
    heading: "DocsSheetsSlides",
    text: { label: "DocsSheetsSlidesText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/security.svg"),
    },
    heading: "Security",
    text: { label: "SecurityText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/ai_helper.svg"),
    },
    heading: "AIHelper",
    text: { 
      label: "AIHelperText",
      links: [{ href: "/ai-assistants" }],
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/flexibility.svg"),
    },
    heading: "Flexibility",
    text: { label: "FlexibilityText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-hancom-alternative/reasons/seamless.svg"),
    },
    variant: "vertical",
    heading: "Seamless",
    text: { label: "SeamlessText" },
  },
];
