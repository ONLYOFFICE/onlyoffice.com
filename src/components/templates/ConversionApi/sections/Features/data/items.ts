import { IFeatureItem } from "@src/components/widgets/FeatureItem";

export const items: IFeatureItem[] = [
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "0",
    },
    heading: "SupportForAllPopularFormats",
    text: "CreatePdfs",
    links: [
      {
        href: "/https://api.onlyoffice.com/docs/docs-api/additional-api/conversion-api/conversion-tables/#text-document-file-formats",
        isExternal: true,
      },
    ],
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-288px",
    },
    heading: "Security",
    text: "TheOpenSourceCode",
    links: [
      {
        href: "/security",
      },
    ],
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-96px",
    },
    heading: "AdvancedSettings",
    text: "AddConversionSettings",
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-192px",
    },
    heading: "HighQualityConversion",
    text: "OOConstantlyImproveTheService",
    links: [
      {
        href: "/online-document-converter",
      },
    ],
  },
];
