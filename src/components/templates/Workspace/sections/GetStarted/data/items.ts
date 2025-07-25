interface IGetStartedItems {
  icon: {
    src: string;
    width?: string;
  };
  title: string;
  text: string;
  link: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export const items: IGetStartedItems[] = [
  {
    icon: {
      src: "/images/templates/workspace/get-started/ovhcloud.svg",
      width: "150px",
    },
    title: "OvhMarketplace",
    text: "OneClickInstall",
    link: {
      label: "GetStarted",
      href: "https://marketplace.ovhcloud.com/p/collaboration/suites-collaboratives-et-productivite/onlyoffice-enterprise",
      isExternal: true,
    },
  },
  {
    icon: { src: "/images/templates/workspace/get-started/hosted.svg" },
    title: "SelfHosted",
    text: "Host",
    link: {
      label: "GetStarted",
      href: "/download-workspace?from=workspace",
    },
  },
  {
    icon: { src: "AwsMarketplaceImage" },
    title: "AwsMarketplace",
    text: "OneClickInstall",
    link: {
      label: "GetStarted",
      href: "AwsMarketplaceLink",
      isExternal: true,
    },
  },
];
