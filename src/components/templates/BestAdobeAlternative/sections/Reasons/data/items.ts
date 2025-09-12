import { IFeatureItem } from "@src/components/widgets/FeatureItem";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IFeatureItem[] = [
  {
    icon: {
      url: getAssetUrl("/images/templates/best-adobe-alternative/reasons/icons.svg"),
      positionX: "0",
    },
    heading: "FreeAndOpenSource",
    text: "OOProvidesUsers",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-adobe-alternative/reasons/icons.svg"),
      positionX: "-96px",
    },
    heading: "WebDesktopMobile",
    text: "WithOOUouCanCreate",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-adobe-alternative/reasons/icons.svg"),
      positionX: "-192px",
    },
    heading: "SeamlessOnlineCollaboration",
    text: "YouAreAbleToCreateForms",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-adobe-alternative/reasons/icons.svg"),
      positionX: "-384px",
    },
    heading: "CompleteFunctionality",
    text: "OOUsesItsNativeDocumentEditor",
  },
  {
    icon: {
      url: getAssetUrl("/images/templates/best-adobe-alternative/reasons/icons.svg"),
      positionX: "-480px",
    },
    heading: "SupportForAdobeFieldSettings",
    text: "InOOForms",
    variant: "vertical",
  },
];
