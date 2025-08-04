const DocumentContent = () => {
  const code = `
<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Open DOCXF for editing</title>
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
                    "url": "https://example.com/url-to-example-document.pdf"
                },
                "documentType": "pdf",
                "editorConfig": {
                    "callbackUrl": "https://example.com/url-to-callback.ashx",
                },
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`.trim();

  return <>{code}</>;
};

export { DocumentContent };
