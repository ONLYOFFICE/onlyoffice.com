interface IMedals {
  image: string;
  href: string;
  width: string;
  height: string;
  mobileWidth: string;
  mobileHeight: string;
}

export const medals: IMedals[] = [
  {
    image: "/images/templates/document-management/hero/cloudaward-2023.svg",
    href: "https://www.cloudcomputing-insider.de/das-sind-die-gewinner-der-it-awards-2022-a-9688aa90dd9c2cff790581d7dd05547a/",
    width: "168px",
    height: "111px",
    mobileWidth: "106px",
    mobileHeight: "70px",
  },
  {
    image: "/images/templates/document-management/hero/sourceforge-badge.svg",
    href: "https://sourceforge.net/software/product/ONLYOFFICE/",
    width: "96px",
    height: "96px",
    mobileWidth: "60px",
    mobileHeight: "63px",
  },
  {
    image: "/images/templates/document-management/hero/front-runners.png",
    href: "https://www.softwareadvice.com/category/722-document-management/#top-products",
    width: "124px",
    height: "97px",
    mobileWidth: "79px",
    mobileHeight: "62px",
  },
];
