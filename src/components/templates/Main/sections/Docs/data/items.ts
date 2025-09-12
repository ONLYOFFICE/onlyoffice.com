import { IFeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";


type DocsItem = IFeatureSwitcher["items"][0] & {
  links?: { id: string; url: string }[];
};

export const items: DocsItem[] = [
  {
    label: "ViewEditAndCollaborateOnDocsSheetsSlides",
    links: [
      { id: "docs-document-editor", url: "/document-editor" },
      { id: "docs-spreadsheet-editor", url: "/spreadsheet-editor" },
      { id: "docs-presentation-editor", url: "/presentation-editor" },
    ],
    image: {
      url: "ViewEditAndCollaborateOnDocsSheetsSlidesImg",
      url2x: "ViewEditAndCollaborateOnDocsSheetsSlidesImg2x",
    },
  },
  {
    label: "BuildFillablePDFFormsAndFillThemInOnline",
    links: [{ id: "docs-form-creator", url: "/form-creator" }],
    image: {
      url: "BuildFillablePDFFormsAndFillThemInOnlineImg",
      url2x: "BuildFillablePDFFormsAndFillThemInOnlineImg2x",
    },
  },
  {
    label: "ReadAndEditPDFsExportImportToFromPDF",
    links: [{ id: "docs-pdf-editor", url: "/pdf-editor" }],
    image: {
      url: "ReadAndEditPDFsExportImportToFromPDFImg",
      url2x: "ReadAndEditPDFsExportImportToFromPDFImg2x",
    },
  },
  {
    label: "ConvertDocsToMarkdownAndHTML",
    image: {
      url: "ConvertDocsToMarkdownAndHTMLImg",
      url2x: "ConvertDocsToMarkdownAndHTMLImg2x",
    },
  },
  {
    label: "TurnYourTextbooksIntoEbooks",
    links: [{ id: "docs-e-book", url: "/e-book" }],
    image: {
      url: "TurnYourTextbooksIntoEbooksImg",
      url2x: "TurnYourTextbooksIntoEbooksImg2x",
    },
  },
  {
    label: "ViewAndNavigateDiagramsWithEase",
    links: [{ id: "docs-diagram", url: "/diagram-viewer" }],
    image: {
      url: "ViewAndNavigateDiagramsWithEaseImg",
      url2x: "ViewAndNavigateDiagramsWithEaseImg2x",
    },
  },
];
