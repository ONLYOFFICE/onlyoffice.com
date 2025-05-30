import { IButtonInfo } from "../Actions.types";

let isMobile: boolean = false;
const isMobileOnInit = () => {
  if (typeof window === "undefined") return;
  isMobile = window.innerWidth <= 768;
}
isMobileOnInit();

export const tabsInfo: IButtonInfo[] = [
  {
    id: 1,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.docx",
    title: "ActionsExampleDocumentTitleDocx",
    fileType: "docx",
    docType: "word",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditDocx",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Open DOCX for editing</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "docx",
                    "key": "E7FAFC9C22A8",
                    "title": "Example Document Title.docx",
                    "url": "https://example.com/url-to-example-document.docx"
                },
                "documentType": "word",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>
`,
  },
  {
    id: 2,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.xlsx",
    title: "ActionsExampleDocumentTitleXlsx",
    fileType: "xlsx",
    docType: "cell",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditXlsx",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Open XLSX for editing</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "xlsx",
                    "key": "E7FAFC9C22A8",
                    "title": "Example Spreadsheet Title.xlsx",
                    "url": "https://example.com/url-to-example-spreadsheet.xlsx"
                },
                "documentType": "cell",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>
`,
  },
  {
    id: 3,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.pptx",
    title: "ActionsExampleDocumentTitlePptx",
    fileType: "pptx",
    docType: "slide",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditPptx",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Open PPTX for editing</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "pptx",
                    "key": "E7FAFC9C22A8",
                    "title": "Example Title.pptx",
                    "url": "https://example.com/url-to-example-presentation.pptx"
                },
                "documentType": "slide",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`,
  },
  {
    id: 4,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.pdf",
    title: "ActionsExampleDocumentTitlePdf",
    fileType: "pdf",
    docType: "pdf",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditPdf",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Edit PDF</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "pdf",
                    "key": "9B9F6EFE8937",
                    "title": "Example Document Title.pdf",
                    "url": "https://example.com/url-to-example-document.pdf"
                },
                "documentType": "pdf",
                "editorConfig": {
                    "mode": "edit"
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`,
  },
  {
    id: 5,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo-invoice.pdf",
    title: "ActionsExampleDocumentTitlePdf",
    fileType: "pdf",
    docType: "pdf",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsCreateForm",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Create form</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "pdf",
                    "key": "E7FAFC9C22A8",
                    "title": "Example Form Template Title.pdf",
                    "url": "https://example.com/url-to-example-document.pdf",
                },
                "documentType": "pdf",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                    "mode": "edit"
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });

    </script>
</body>
</html>`,
  },
  {
    id: 6,
    url: "https://static.onlyoffice.com/assets/docs/samples/oform.pdf",
    title: "ActionsExampleDocumentTitlePdf",
    fileType: "pdf",
    docType: "pdf",
    mode: "view",
    uiTheme: "theme-light",
    text: "ActionsFillInPdfForm",
    isCollaborate: false,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Fill in PDF form</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "pdf",
                    "key": "9B5D4A67A9A9",
                    "title": "Example Form Title.pdf",
                    "url": "https://example.com/url-to-example-document.pdf",
                    "permissions": {
                        "edit": false,
                        "fillForms": true
                    }
                },
                "documentType": "pdf",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                    "mode": "edit"
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });

    </script>
</body>
</html>`,
  },
  {
    id: 7,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.docx",
    title: "ActionsExampleDocumentTitleDocx",
    fileType: "docx",
    docType: "word",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsCollaborate",
    isCollaborate: true,
    demoCodeFirst: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Collaborate</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "docx",
                    "key": "B143195F47A0",
                    "title": "Example Document Title.docx",
                    "url": "https://example.com/url-to-example-document.docx"
                },
                "documentType": "word",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                    "user": {
                        "id": "78e1e841",
                        "name": "John Smith"
                    }
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`,
    demoCodeSecond: `<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Collaborate</title>
</head>
<body style="height: 100%; margin: 0;">
    <div id="placeholder" style="height: 100%"></div>
    <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
    <script type="text/javascript">
        window.docEditor = new DocsAPI.DocEditor("placeholder",
            {
                "document": {
                    "fileType": "docx",
                    "key": "B143195F47A0",
                    "title": "Example Document Title.docx",
                    "url": "https://example.com/url-to-example-document.docx"
                },
                "documentType": "word",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                    "user": {
                        "id": "F89d8069ba2b",
                        "name": "Kate Cage"
                    }
                },
                ${isMobile ? '"type": "mobile"' : ""},
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`,
  },
];
