interface IPortfolio {
  /** The portfolio title */
  title: string;
  /** The portfolio text */
  text: string;
  /** The portfolio link */
  link: {
    /** The portfolio link label */
    label: string;
    /** The portfolio link href */
    href: string;
  };
  /** The portfolio image */
  image: {
    /** The portfolio image url */
    imgUrl: string;
    /** The portfolio image url 2x */
    imgUrl2x: string;
    /** The portfolio image width */
    imgWidth: number;
    /** The portfolio image height */
    imgHeight: number;
  };
}

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
