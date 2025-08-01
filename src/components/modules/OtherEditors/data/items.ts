interface IEditor {
  id: string;
  name: string;
  url: string;
}

export const items: IEditor[] = [
  {
    id: "document_editor",
    name: "DocumentEditor",
    url: "/document-editor",
  },
  {
    id: "spreadsheet_editor",
    name: "SpreadsheetEditor",
    url: "/spreadsheet-editor",
  },
  {
    id: "presentation_editor",
    name: "PresentationEditor",
    url: "/presentation-editor",
  },
  {
    id: "form_creator",
    name: "FormCreator",
    url: "/form-creator",
  },
  {
    id: "pdf_editor",
    name: "PDFEditor",
    url: "/pdf-editor",
  },
  {
    id: "ebook_creator",
    name: "EBookCreator",
    url: "/e-book",
  },
  {
    id: "diagram_viewer",
    name: "DiagramViewer",
    url: "/diagram-viewer",
  },
];
