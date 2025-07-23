import { formats } from "@src/components/modules/converter/Hero/data/formats";

export const getFormatType = (extension: string, path: string) => {
  switch (extension) {
    case "pdf":
      return "pdf";
    case "xml":
      return path === "/spreadsheet-converter" ? "spreadsheet" : "text";
    default:
      if (formats.text.inputFormats.includes(extension)) return "text";
      if (formats.spreadsheet.inputFormats.includes(extension))
        return "spreadsheet";
      if (formats.presentation.inputFormats.includes(extension))
        return "presentation";
      return null;
  }
};
