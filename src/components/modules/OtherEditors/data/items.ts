interface IEditor {
  id: string;
  name: string;
  url: string;
}

export const items: IEditor[] = [
  {
    id: "document_editor",
    name: "Document Editor",
    url: "/document-editor",
  },
  {
    id: "spreadsheet_editor",
    name: "Spreadsheet Editor",
    url: "/spreadsheet-editor",
  },
  {
    id: "presentation_editor",
    name: "Presentation Editor",
    url: "/presentation-editor",
  },
  {
    id: "form_creator",
    name: "Form creator",
    url: "/form-creator",
  },
  {
    id: "pdf_editor",
    name: "PDF Editor",
    url: "/pdf-editor",
  },
  {
    id: "ebook_creator",
    name: "E-book creator",
    url: "/e-book",
  },
];
