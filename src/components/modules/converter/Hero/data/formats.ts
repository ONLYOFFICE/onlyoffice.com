// prettier-ignore
export const formats = {
  pdf: {
    inputFormats: ["pdf"],
    allOutputFormats: ["pdf", "pdfa", "docx", "docxf", "txt", "rtf", "epub", "fb2", "html", "docm", "dotx", "dotm", "odt", "ott", "png", "jpg", "bmp", "gif"],
    outputFormats: {
      "pdf": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdfa", "png", "rtf", "txt"]
    }
  },
  text: {
    inputFormats: ["djvu", "doc", "docm", "docx", "docxf", "dot", "dotm", "dotx", "epub", "fb2", "fodt", "htm", "hwp", "hwpx", "html", "mht", "mhtml", "odt", "ott", "oxps", "pages", "pdf", "rtf", "stw", "sxw", "txt", "wps", "wpt", "xml", "xps"],
    allOutputFormats: ["docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "html", "hwp", "hwpx", "odt", "ott", "pages", "pdf", "pdfa", "rtf", "txt", "png", "jpg", "bmp", "gif"],
    outputFormats: {
      "djvu": ["bmp", "gif", "jpg", "pdf", "pdfa", "png"],
      "doc": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "docm": ["bmp", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "docx": ["bmp", "docm", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "docxf": ["bmp", "docm", "docx", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "dot": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "dotm": ["bmp", "docm", "docx", "docxf", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "dotx": ["bmp", "docm", "docx", "docxf", "dotm", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "epub": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "fb2": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "fodt": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "htm": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "html": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "hwp": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "hwpx": ["bmp", "docm", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "mht": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "mhtml": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "odt": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "ott": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "pdf", "pdfa", "png", "rtf", "txt"],
      "oxps": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "pages": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "pdf": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdfa", "png", "rtf", "txt"],
      "rtf": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "txt"],
      "stw": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "sxw": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "txt": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf"],
      "wps": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "wpt": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "xml": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"],
      "xps": ["bmp", "docm", "docx", "docxf", "dotm", "dotx", "epub", "fb2", "gif", "html", "jpg", "odt", "ott", "pdf", "pdfa", "png", "rtf", "txt"]
    }
  },
  spreadsheet: {
    inputFormats: ["csv", "et", "ett", "fods", "numbers", "ods", "ots", "sxc", "xls", "xlsb", "xlsm", "xlsx", "xlt", "xltm", "xltx", "xml"],
    allOutputFormats: ["csv", "numbers", "ods", "ots", "pdf", "pdfa", "xlsm", "xlsx", "xltm", "xltx", "png", "jpg", "bmp", "gif"],
    outputFormats: {
      "csv": ["bmp", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "et": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "ett": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "fods": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "numbers": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "ods": ["bmp", "csv", "gif", "jpg", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "ots": ["bmp", "csv", "gif", "jpg", "ods", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "sxc": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "xls": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "xlsb": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "xlsm": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsx", "xltm", "xltx"],
      "xlsx": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xltm", "xltx"],
      "xlt": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"],
      "xltm": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltx"],
      "xltx": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm"],
      "xml": ["bmp", "csv", "gif", "jpg", "ods", "ots", "pdf", "pdfa", "png", "xlsm", "xlsx", "xltm", "xltx"]
    }
  },
  presentation: {
    inputFormats: ["dps", "dpt", "fodp", "key", "odp", "otp", "pot", "potm", "potx", "pps", "ppsm", "ppsx", "ppt", "pptm", "pptx", "sxi"],
    allOutputFormats: ["odp", "otp", "key", "pdf", "pdfa", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx", "png", "jpg", "bmp", "gif"],
    outputFormats: {
      "dps": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "dpt": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "fodp": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "key": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "odp": ["bmp", "gif", "jpg", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "otp": ["bmp", "gif", "jpg", "odp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "pot": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "potm": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "potx": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "ppsm", "ppsx", "pptm", "pptx"],
      "pps": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "ppsm": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsx", "pptm", "pptx"],
      "ppsx": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "pptm", "pptx"],
      "ppt": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"],
      "pptm": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptx"],
      "pptx": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm"],
      "sxi": ["bmp", "gif", "jpg", "odp", "otp", "pdf", "pdfa", "png", "potm", "potx", "ppsm", "ppsx", "pptm", "pptx"]
    }
  },
};
