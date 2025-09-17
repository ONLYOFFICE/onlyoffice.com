import { IFeatureItem } from "@src/components/widgets/FeatureItem";

interface IFeatureItemExtended extends Omit<IFeatureItem, "text"> {
  text: {
    label: React.ReactNode;
    links?: { href: string; isExternal?: boolean }[];
  };
}

export const items: IFeatureItemExtended[] = [
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/open_source.svg",
    },
    heading: "MaximumCompatibility",
    text: { label: "MaximumCompatibilityText" },
  },
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/desktop_app.svg",
    },
    heading: "DesktopApp",
    text: { label: "DesktopAppText" },
  },
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/docs_sheets_slides.svg",
    },
    heading: "DocsSheetsSlides",
    text: { label: "DocsSheetsSlidesText" },
  },
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/seamless.svg",
    },
    heading: "Seamless",
    text: { label: "SeamlessText" },
  },
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/flexibility.svg",
    },
    heading: "Flexibility",
    text: { label: "FlexibilityText" },
  },
  {
    icon: {
      url: "/images/templates/best-libreoffice-alternative/reasons/ai_helper.svg",
    },
    heading: "AIHelper",
    text: { 
      label: "AIHelperText",
      links: [{ href: "/ai-assistants" }],
    },
  },
];
