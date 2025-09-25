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
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/open_source.svg"),
    },
    heading: "OpenSource",
    text: { label: "OpenSourceText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/desktop_app.svg"),
    },
    heading: "DesktopApp",
    text: { label: "DesktopAppText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/seamless.svg"),
    },
    heading: "Seamless",
    text: { label: "SeamlessText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/security.svg"),
    },
    heading: "Security",
    text: { label: "SecurityText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/docs_sheets_slides.svg"),
    },
    heading: "DocsSheetsSlides",
    text: { label: "DocsSheetsSlidesText" },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/ai_helper.svg"),
    },
    heading: "AIHelper",
    text: { 
      label: "AIHelperText",
      links: [{ href: "/ai-assistants" }],
    },
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-wps-alternative/reasons/flexibility.svg"),
    },
    variant: "vertical",
    heading: "Flexibility",
    text: { label: "FlexibilityText" },
  },
];
