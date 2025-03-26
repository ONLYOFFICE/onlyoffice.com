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
      url: "/images/templates/main/docs/actions.png",
      url2x: "/images/templates/main/docs/actions@2x.png",
    },
  },
  {
    label: "BuildFillablePDFFormsAndFillThemInOnline",
    links: [{ id: "docs-form-creator", url: "/form-creator" }],
    image: {
      url: "/images/templates/main/docs/pdf_forms.png",
      url2x: "/images/templates/main/docs/pdf_forms@2x.png",
    },
  },
  {
    label: "ReadAndEditPDFsExportImportToFromPDF",
    links: [{ id: "docs-pdf-editor", url: "/pdf-editor" }],
    image: {
      url: "/images/templates/main/docs/pdfs.png",
      url2x: "/images/templates/main/docs/pdfs@2x.png",
    },
  },
  {
    label: "ConvertDocsToMarkdownAndHTML",
    image: {
      url: "/images/templates/main/docs/convert.png",
      url2x: "/images/templates/main/docs/convert@2x.png",
    },
  },
  {
    label: "TurnYourTextbooksIntoEbooks",
    links: [{ id: "docs-e-book", url: "/e-book" }],
    image: {
      url: "/images/templates/main/docs/e_book.png",
      url2x: "/images/templates/main/docs/e_book@2x.png",
    },
  },
];
