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
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "0",
    },
    heading: "SupportForAllPopularFormats",
    text: {
      label: "CreatePdfs",
      links: [
        {
          href: "https://api.onlyoffice.com/docs/docs-api/additional-api/conversion-api/conversion-tables/#text-document-file-formats",
          isExternal: true,
        },
      ],
    },
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-288px",
    },
    heading: "Security",
    text: {
      label: "TheOpenSourceCode",
      links: [
        {
          href: "/security",
        },
      ],
    },
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-96px",
    },
    heading: "AdvancedSettings",
    text: { label: "AddConversionSettings" },
  },
  {
    icon: {
      url: "/images/templates/conversion-api/features/icons.svg",
      positionX: "-192px",
    },
    heading: "HighQualityConversion",
    text: {
      label: "OOConstantlyImproveTheService",
      links: [
        {
          href: "/online-document-converter",
        },
      ],
    },
  },
];
