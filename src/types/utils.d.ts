declare module "onlyoffice-react-ui-kit/advent-announce" {
  import React from "react";

  interface IAdventAnnounce {
    locale?: string;
  }

  export const OOAdventAnnounce: React.FC<IAdventAnnounce>;
}

declare module "onlyoffice-react-ui-kit/footer-menu" {
  import React from "react";

  interface IFooterMenu {
    locale?: string;
  }

  export const FooterMenu: React.FC<IFooterMenu>;
}

declare module "onlyoffice-react-ui-kit/header" {
  import React from "react";

  interface IHeader {
    locale?: string;
    languageSelector: {
      languages: {
        shortKey: string;
        name: string;
      }[];
      href: string;
    };
    search: {
      show: boolean;
      onSubmit: () => void;
      onChange: () => void;
      value: string;
      variant: "main" | "secondary";
    };
    hasPhone: boolean;
    theme?: "white";
    highlight?: {
      buttonId?: string;
      linkId?: string;
    };
  }

  export const OOHeader: React.FC<IHeader>;
}
