type DocumentType = "word" | "cell" | "slide" | "pdf" | "text" | "spreadsheet" | "presentation";

type UiTheme = "default-dark" | "default-light" | "theme-light" | "theme-classic-light" | "theme-dark" | "theme-contrast-dark";

interface ITokenResponse {
  token: string;
  config: {
    document: {
      fileType: string;
      key: string;
      title: string;
      url: string;
      permissions?: {
        edit?: boolean;
        fillForms?: boolean;
        comment?: boolean;
        download?: boolean;
        print?: boolean;
        review?: boolean;
      };
    };
    documentType: DocumentType;
    editorConfig: {
      mode: "view" | "edit";
      lang?: string;
      callbackUrl?: string;
      customization?: {
        uiTheme?: UiTheme;
        anonymous?: {
          request: boolean;
          label?: string;
        };
      };
    };
  };
}

interface IActionsContentProps {
  url: string;
  title: string;
  fileType: string;
  docType: DocumentType;
  mode: "view" | "edit";
  uiTheme: UiTheme;
  isCollaborate: boolean;
}



export type { ITokenResponse, IActionsContentProps, DocumentType, UiTheme };
