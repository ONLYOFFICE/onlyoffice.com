import { ICompatibilityItem } from "@src/components/modules/best-alternative/BestAlternativeCompatibility/BestAlternativeCompatibility.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: ICompatibilityItem[] = [
  {
    type: "onlyOfficeDocx",
    src: getAssetUrl("/images/modules/best-alternative/best-alternative-compatibility/pdf/onlyoffice_docx.pdf"),
  },
  {
    type: "onlyOfficeXlsx",
    src: getAssetUrl("/images/modules/best-alternative/best-alternative-compatibility/pdf/onlyoffice_xlsx.pdf"),
  },
  {
    type: "alternativeDocx",
    src: getAssetUrl("/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho_docs_docx.pdf"),
  },
  {
    type: "alternativeXlsx",
    src: getAssetUrl("/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho_docs_xlsx.pdf"),
  },
];
