export interface IItems {
  type:
    | "onlyOfficeDocx"
    | "onlyOfficeXlsx"
    | "zohoDocsDocx"
    | "zohoDocsXlsx";
  src: string;
}

export const items: IItems[] = [
  {
    type: "onlyOfficeDocx",
    src: "/images/templates/best-zoho-docs-alternative/compatibility/pdf/onlyoffice_docx.pdf",
  },
  {
    type: "onlyOfficeXlsx",
    src: "/images/templates/best-zoho-docs-alternative/compatibility/pdf/onlyoffice_xlsx.pdf",
  },
  {
    type: "zohoDocsDocx",
    src: "/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho_docs_docx.pdf",
  },
  {
    type: "zohoDocsXlsx",
    src: "/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho_docs_xlsx.pdf",
  },
];
