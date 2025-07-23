import { formats } from "@src/components/modules/converter/Hero/data/formats";

export const getFileData = (
  extension: string,
  pathnameNoLang: string,
): string[] | null => {
  switch (pathnameNoLang) {
    case "/text-file-converter":
      return formats.text.inputFormats.includes(extension)
        ? formats.text.outputFormats[
            extension as keyof typeof formats.text.outputFormats
          ]
        : null;

    case "/spreadsheet-converter":
      return formats.spreadsheet.inputFormats.includes(extension)
        ? formats.spreadsheet.outputFormats[
            extension as keyof typeof formats.spreadsheet.outputFormats
          ]
        : null;

    case "/presentation-converter":
      return formats.presentation.inputFormats.includes(extension)
        ? formats.presentation.outputFormats[
            extension as keyof typeof formats.presentation.outputFormats
          ]
        : null;

    case "/pdf-converter":
    case "/pdf-docx-converter":
    case "/pdf-jpg-converter":
    case "/pdf-txt-converter":
      return extension === "pdf" ? formats.pdf.outputFormats[extension] : null;

    case "/xlsx-csv-converter":
    case "/xlsx-pdf-converter":
      return extension === "xlsx"
        ? formats.spreadsheet.outputFormats[extension]
        : null;

    case "/pptx-odp-converter":
    case "/pptx-pdf-converter":
      return extension === "pptx"
        ? formats.presentation.outputFormats[extension]
        : null;

    case "/epub-txt-converter":
      return extension === "epub"
        ? formats.text.outputFormats[extension]
        : null;

    case "/txt-docx-converter":
      return extension === "txt" ? formats.text.outputFormats[extension] : null;

    case "/docx-pdf-converter":
      return extension === "docx"
        ? formats.text.outputFormats[extension]
        : null;

    case "/et-xlsx-converter":
      return extension === "et"
        ? formats.spreadsheet.outputFormats[extension]
        : null;

    default:
      if (formats.text.inputFormats.includes(extension)) {
        return formats.text.outputFormats[
          extension as keyof typeof formats.text.outputFormats
        ];
      }
      if (formats.spreadsheet.inputFormats.includes(extension)) {
        return formats.spreadsheet.outputFormats[
          extension as keyof typeof formats.spreadsheet.outputFormats
        ];
      }
      if (formats.presentation.inputFormats.includes(extension)) {
        return formats.presentation.outputFormats[
          extension as keyof typeof formats.presentation.outputFormats
        ];
      }
      return null;
  }
};
