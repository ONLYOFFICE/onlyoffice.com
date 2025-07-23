interface IItem {
  heading: string;
  description: string;
  href?: string;
  positionX: string;
}

const items: IItem[] = [
  {
    heading: "DocumentEditing",
    description: "DocumentEditingDescription",
    positionX: "0px",
    href: "/document-editor",
  },
  {
    heading: "SpreadsheetEditing",
    description: "SpreadsheetEditingDescription",
    positionX: "-176px",
    href: "/spreadsheet-editor",
  },
  {
    heading: "PresentationEditing",
    description: "PresentationEditingDescription",
    positionX: "-528px",
    href: "/presentation-editor",
  },
  {
    heading: "FillableForms",
    description: "FillableFormsDescription",
    positionX: "-352px",
    href: "/form-creator",
  },
  {
    heading: "PdfEditing",
    description: "PdfEditingDescription",
    positionX: "-704px",
    href: "/pdf-editor",
  },
  {
    heading: "DiagramViewing",
    description: "DiagramViewingDescription",
    positionX: "-1760px",
    href: "/diagram-viewer",
  }
];

export { items };
