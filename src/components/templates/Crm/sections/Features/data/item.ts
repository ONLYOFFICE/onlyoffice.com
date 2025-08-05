interface ICollaborationsFeatures {
  image: { src: string; alt: string };
  heading: string;
  text: string;
}

export const features: ICollaborationsFeatures[] = [
  {
    image: { src: "CustomerRelationsImage", alt: "CustomerRelations" },
    heading: "CustomerRelations",
    text: "CustomerRelationsText",
  },
  {
    image: { src: "CustomizationImage", alt: "Customization" },
    heading: "Customization",
    text: "CustomizationText",
  },
  {
    image: { src: "RapidEntryImage", alt: "RapidEntry" },
    heading: "RapidEntry",
    text: "RapidEntryText",
  },
  {
    image: { src: "InvoicingImage", alt: "Invoicing" },
    heading: "Invoicing",
    text: "InvoicingText",
  },
  {
    image: { src: "CloseIntegrationImage", alt: "CloseIntegration" },
    heading: "CloseIntegration",
    text: "CloseIntegrationText",
  },
  {
    image: { src: "CustomerCallImage", alt: "CustomerCall" },
    heading: "CustomerCall",
    text: "CustomerCallText",
  },
  {
    image: { src: "SalesReportingImage", alt: "SalesReporting" },
    heading: "SalesReporting",
    text: "SalesReportingText",
  },
];
