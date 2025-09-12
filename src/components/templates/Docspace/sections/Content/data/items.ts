import { getAssetUrl } from "@utils/getAssetUrl";
const items = [
  {
    heading: "TextDocuments",
    imgUrl: getAssetUrl("/images/templates/docspace/content/text-documents-icon.svg"),
    href: "/document-editor",
  },
  {
    heading: "Spreadsheets",
    imgUrl: getAssetUrl("/images/templates/docspace/content/spreadsheet-icon.svg"),
    href: "/spreadsheet-editor",
  },
  {
    heading: "Presentations",
    imgUrl: getAssetUrl("/images/templates/docspace/content/presentations-icon.svg"),
    href: "/presentation-editor",
  },
  {
    heading: "DigitalForms",
    imgUrl: getAssetUrl("/images/templates/docspace/content/digital-forms-icon.svg"),
    href: "/form-creator",
  },
  {
    heading: "PDFs",
    imgUrl: getAssetUrl("/images/templates/docspace/content/pdf-icon.svg"),
    href: "/pdf-editor",
  },
  {
    heading: "MarkdownFiles",
    imgUrl: getAssetUrl("/images/templates/docspace/content/markdown-icon.svg"),
    href: "https://www.onlyoffice.com/app-directory/markdown",
  },
  {
    heading: "EBooks",
    imgUrl: getAssetUrl("/images/templates/docspace/content/e-books-icon.svg"),
    href: "/e-book",
  },
  {
    heading: "Multimedia",
    imgUrl: getAssetUrl("/images/templates/docspace/content/multimedia-icon.svg"),
  },
  {
    heading: "Diagrams",
    imgUrl: getAssetUrl("/images/templates/docspace/content/diagram-viewer-icon.svg"),
    href: "/diagram-viewer",
  },
];
export { items };
