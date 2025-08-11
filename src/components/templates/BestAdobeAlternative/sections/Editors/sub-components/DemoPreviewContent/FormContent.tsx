const FormContent = () => {
  const code = `
<!DOCTYPE html>
<html style="height: 100%;">
<head>
    <title>Fill out form</title>
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
                "height": "100%",
                "width": "100%"
            });
    </script>
</body>
</html>`.trim();

  return <>{code}</>;
};

export { FormContent };
