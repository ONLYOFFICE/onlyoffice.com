interface ISolution {
  title: string;
  link: {
    label: string;
    href: string;
  };
  image: string;
}

export const solutionsItems = [
  {
    title: "Cloud",
    link: {
      label: "ConnectToYourCloud",
      href: "/all-connectors",
    },
    image: "/images/templates/installation-success-desktop/solutions/cloud.svg",
  },
  {
    title: "MobileOffice",
    link: {
      label: "DownloadMobileOffice",
      href: "/download-desktop#mobile",
    },
    image: "/images/templates/installation-success-desktop/solutions/mobile_office.svg",
  },
  {
    title: "OODocSpace",
    link: {
      label: "TryDocSpace",
      href: "/docspace",
    },
    image: "/images/templates/installation-success-desktop/solutions/oo_docspace.svg",
  },
];
