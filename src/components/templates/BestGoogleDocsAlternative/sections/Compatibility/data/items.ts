export interface IItems {
  type:
    | "onlyOfficeDocx"
    | "onlyOfficeXlsx"
    | "googleDocsDocx"
    | "googleDocsXlsx";
  src: string;
}

export const items: IItems[] = [
  {
    type: "onlyOfficeDocx",
    src: "/images/templates/best-google-docs-alternative/compatibility/pdf/onlyoffice_docx.pdf",
  },
  {
    type: "onlyOfficeXlsx",
    src: "/images/templates/best-google-docs-alternative/compatibility/pdf/onlyoffice_xlsx.pdf",
  },
  {
    type: "googleDocsDocx",
    src: "/images/templates/best-google-docs-alternative/compatibility/pdf/google_docs_docx.pdf",
  },
  {
    type: "googleDocsXlsx",
    src: "/images/templates/best-google-docs-alternative/compatibility/pdf/google_docs_xlsx.pdf",
  },
];
