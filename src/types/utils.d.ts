declare module "onlyoffice-react-ui-kit/advent-announce" {
  import React from "react";

  interface IAdventAnnounce {
    locale?: string;
  }

  export const OOAdventAnnounce: React.FC<IAdventAnnounce>;
}

declare module "onlyoffice-react-ui-kit/footer" {
  import React from "react";

  interface IFooter {
    locale?: string;
    languages: {
      shortKey: string;
      name: string;
      href: string
    }[];
  }

  export const OOFooter: React.FC<IFooter>;
}

declare module "onlyoffice-react-ui-kit/header" {
  import React from "react";

  interface IHeader {
    locale?: string;
    borderColor?: string;
    backgroundColor?: string;
    languages: {
      key: string;
      shortKey: string;
      name: string;
      href: string
    }[];
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
