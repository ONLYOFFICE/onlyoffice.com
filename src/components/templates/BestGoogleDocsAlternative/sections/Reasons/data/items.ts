import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/ooxml.svg"),
    },
    heading: "OpenSource",
    text: "OpenSourceText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/security.svg"),
    },
    heading: "Security",
    text: "SecurityText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/desktop_app.svg"),
    },
    heading: "DesktopApp",
    text: "DesktopAppText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/docs_sheets_slides.svg"),
    },
    heading: "DocsSheetsSlides",
    text: "DocsSheetsSlidesText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/seamless.svg"),
    },
    heading: "Seamless",
    text: "SeamlessText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/support.svg"),
    },
    heading: "Support",
    text: "SupportText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/flexibility.svg"),
    },
    heading: "Flexibility",
    text: "FlexibilityText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-google-docs-alternative/reasons/ai_helper.svg"),
    },
    heading: "AIHelper",
    text: "AIHelperText",
  },
];
