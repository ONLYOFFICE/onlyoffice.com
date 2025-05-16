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

interface IActionsContentProps {
  url: string;
  title: string;
  fileType: string;
  mode: "view" | "edit";
  uiTheme:
    | "theme-light"
    | "theme-classic-light"
    | "theme-dark"
    | "theme-contrast-dark"
    | "default-dark"
    | "default-light";
}

interface IButtonInfo extends IActionsContentProps {
  text: string;
}

export type { ITokenResponse, IActionsContentProps, IButtonInfo };
