export interface TokenResponse {
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
