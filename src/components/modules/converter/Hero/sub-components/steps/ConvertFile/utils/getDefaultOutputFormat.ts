export function getDefaultOutputFormat(
  extension: string,
  formatType: string,
  path: string,
): string {
  if (["docx", "docxf", "xlsx", "pptx", "djvu"].includes(extension)) {
    if (path === "/pptx-odp-converter") return "odp";
    if (path === "/xlsx-csv-converter") return "csv";
    return "pdf";
  }

  switch (formatType) {
    case "text":
      return path === "/epub-txt-converter" ? "txt" : "docx";
    case "pdf":
      if (path === "/pdf-jpg-converter") return "jpg";
      if (path === "/pdf-txt-converter") return "txt";
      return "docx";
    case "spreadsheet":
      return "xlsx";
    case "presentation":
      return "pptx";
    default:
      return "";
  }
}
