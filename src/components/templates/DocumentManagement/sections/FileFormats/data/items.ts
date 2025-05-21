interface IFileFormatItem {
  icon: {
    positionX: string;
    mobilePositionX: string;
  };
  title: string;
  text: string;
  link?: string;
}

export const fileFormats: IFileFormatItem[] = [
  {
    icon: {
      positionX: "0",
      mobilePositionX: "0",
    },
    title: "TextDocuments",
    text: "TextDocumentsText",
    link: "/document-editor?from=document-management",
  },
  {
    icon: {
      positionX: "-382px",
      mobilePositionX: "-292px",
    },
    title: "Spreadsheets",
    text: "SpreadsheetsText",
    link: "/spreadsheet-editor?from=document-management",
  },
  {
    icon: {
      positionX: "-763px",
      mobilePositionX: "-584px",
    },
    title: "Presentations",
    text: "PresentationsText",
    link: "/slides?from=document-management",
  },
  {
    icon: {
      positionX: "-574px",
      mobilePositionX: "-439px",
    },
    title: "Pdf",
    text: "PdfText",
    link: "/pdf-editor?from=document-management",
  },
  {
    icon: {
      positionX: "-191px",
      mobilePositionX: "-145px",
    },
    title: "Multimedia",
    text: "MultimediaText",
  },
  {
    icon: {
      positionX: "-953px",
      mobilePositionX: "-730px",
    },
    title: "DigitalForms",
    text: "DigitalFormsText",
    link: "/form-creator?from=document-management",
  },
];
