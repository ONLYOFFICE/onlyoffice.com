import { getAssetUrl } from "@utils/getAssetUrl";
  interface IItem {
    iconPosition: number;
    icon?: string;
    title: string;
    description: string;
    link?: string;
  }
  
  export const features: IItem[] = [
    {
      iconPosition: 0,
      title: "TextEditingTitle",
      description: "TextEditingDescription",
      link: "/document-editor"
    },
    {
      iconPosition: -176,
      title: "SpreadsheetEditingTitle",
      description: "SpreadsheetEditingDescription",
      link: "/spreadsheet-editor"
    },
    {
      iconPosition: -352,
      title: "FormBuildingTitle",
      description: "FormBuildingDescription",
      link: "/form-creator"
    },
    {
      iconPosition: -528,
      title: "PresentationEditingTitle",
      description: "PresentationEditingDescription",
      link: "/presentation-editor"
    },
    {
      iconPosition: -704,
      title: "PdfEditingTitle",
      description: "PdfEditingDescription",
      link: "/pdf-editor"
    },
    {
      iconPosition: -880,
      title: "EbookCreationTitle",
      description: "EbookCreationDescription",
      link: "/e-book"
    },
    {
      iconPosition: -1056,
      title: "DocumentBuildingTitle",
      description: "DocumentBuildingDescription",
      link: "/document-builder"
    },
    {
      iconPosition: -1232,
      title: "DocumentConversionTitle",
      description: "DocumentConversionDescription",
      link: "/conversion-api"
    },
    {
      iconPosition: -1408,
      title: "SeamlessCollaborationTitle",
      description: "SeamlessCollaborationDescription",
      link: "/seamless-collaboration"
    },
    {
      iconPosition: 0,
      icon: getAssetUrl("/images/templates/developer-edition/features/document-viewing.svg"),
      title: "DocumentViewingTitle",
      description: "DocumentViewingDescription",
    }
  ];