interface ITokenResponse {
  token: string;
  config: {
    document: {
      fileType: string;
      key: string;
      title: string;
      url: string;
    };
    documentType: string;
    editorConfig: {
      mode: string;
      callbackUrl: string;
      customization: {
        uiTheme: string;
      };
    };
  };
}

interface IDemoContentProps {
  url: string;
  title: string;
  fileType: string;
  docType: "word" | "cell" | "slide" | "pdf";
  mode: "view" | "edit";
  uiTheme:
    | "theme-light"
    | "theme-classic-light"
    | "theme-dark"
    | "theme-contrast-dark"
    | "default-dark"
    | "default-light";
  isCollaborate: boolean;
}



export type { ITokenResponse, IDemoContentProps };
