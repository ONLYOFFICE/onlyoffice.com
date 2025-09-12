import { ICompatibilityCompany } from "../Compatibility.types";

import { getAssetUrl } from "@utils/getAssetUrl";
export const companies: ICompatibilityCompany[] = [
  {
    name: "onlyoffice",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/onlyoffice-logo.svg"),
    },
    text: "ONLYOFFICE",
  },
  {
    name: "ms-office",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/ms-office-logo.svg"),
    },
    text: "MS Office",
  },
  {
    name: "google-docs",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/google-docs-logo.svg"),
    },
    text: "Google Docs",
  },
  {
    name: "zoho",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/zoho-logo.svg"),
      width: "64px",
    },
    text: "Zoho",
  },
  {
    name: "libreoffice",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/libreoffice-logo.svg"),
    },
    text: "LibreOffice",
  },
  {
    name: "wps",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/wps-logo.svg"),
    },
    text: "WPS",
  },
  {
    name: "hancom",
    img: {
      src: getAssetUrl("/images/templates/document-editor-comparison/compatibility/hancom-logo.svg"),
    },
    text: "Hancom Office",
  },
];
