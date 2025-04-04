import { IPortfolio } from "../Portfolio.types";

export const portfolio: IPortfolio[] = [
  {
    title: "PortfolioDocSpaceTitle",
    text: "PortfolioDocSpaceText",
    link: {
      label: "PortfolioDocSpaceLink",
      href: "/docspace?from=resellers",
    },
    image: {
      imgUrl: "PortfolioDocSpaceImgUrl",
      imgUrl2x: "PortfolioDocSpaceImgUrl2x",
      imgWidth: 700,
      imgHeight: 440,
    },
  },
  {
    title: "PortfolioDocsTitle",
    text: "PortfolioDocsText",
    link: {
      label: "PortfolioDocsLink",
      href: "/office-suite?from=resellers",
    },
    image: {
      imgUrl: "PortfolioDocsImgUrl",
      imgUrl2x: "PortfolioDocsImgUrl2x",
      imgWidth: 700,
      imgHeight: 380,
    },
  },
  {
    title: "PortfolioWorkspaceTitle",
    text: "PortfolioWorkspaceText",
    link: {
      label: "PortfolioWorkspaceLink",
      href: "/workspace?from=resellers",
    },
    image: {
      imgUrl: "PortfolioWorkspaceImgUrl",
      imgUrl2x: "PortfolioWorkspaceImgUrl2x",
      imgWidth: 630,
      imgHeight: 350,
    },
  },
];
