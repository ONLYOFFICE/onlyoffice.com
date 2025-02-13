declare module "onlyoffice-react-ui-kit/advent-announce" {
  import React from "react";

  interface IAdventAnnounce {
    locale?: string;
  }

  export const AdventAnnounce: React.FC<IAdventAnnounce>;
}

declare module "onlyoffice-react-ui-kit/footer-menu" {
  import React from "react";

  interface IFooterMenu {
    locale?: string;
  }

  export const FooterMenu: React.FC<IFooterMenu>;
}

declare module "onlyoffice-react-ui-kit/header-menu" {
  import React from "react";

  interface IHeaderMenu {
    locale?: string;
    isOpen?: boolean;
  }

  export const HeaderMenu: React.FC<IHeaderMenu>;
}
