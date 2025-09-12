import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/open_source.svg"),
    },
    heading: "MaximumCompatibility",
    text: "MaximumCompatibilityText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/desktop_app.svg"),
    },
    heading: "DesktopApp",
    text: "DesktopAppText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/docs_sheets_slides.svg"),
    },
    heading: "DocsSheetsSlides",
    text: "DocsSheetsSlidesText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/seamless.svg"),
    },
    heading: "Seamless",
    text: "SeamlessText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/flexibility.svg"),
    },
    heading: "Flexibility",
    text: "FlexibilityText",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-libreoffice-alternative/reasons/ai_helper.svg"),
    },
    heading: "AIHelper",
    text: "AIHelperText",
  },
];
