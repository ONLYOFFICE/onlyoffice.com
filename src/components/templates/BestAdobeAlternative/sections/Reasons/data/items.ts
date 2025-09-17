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
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "0",
    },
    heading: "FreeAndOpenSource",
    text: { label: "OOProvidesUsers" },
  },
  {
    icon: {
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "-96px",
    },
    heading: "WebDesktopMobile",
    text: { label: "WithOOUouCanCreate" },
  },
  {
    icon: {
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "-192px",
    },
    heading: "SeamlessOnlineCollaboration",
    text: { label: "YouAreAbleToCreateForms" },
  },
  {
    icon: {
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "-384px",
    },
    heading: "CompleteFunctionality",
    text: { label: "OOUsesItsNativeDocumentEditor" },
  },
  {
    icon: {
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "-480px",
    },
    heading: "SupportForAdobeFieldSettings",
    text: { label: "InOOForms" },
  },
  {
    icon: {
      url: "/images/templates/best-adobe-alternative/reasons/icons.svg",
      positionX: "-570px",
    },
    heading: "AIHelper",
    text: {
      label: "AIHelperText",
      links: [{ href: "/ai-assistants" }],
    },
  },
];
