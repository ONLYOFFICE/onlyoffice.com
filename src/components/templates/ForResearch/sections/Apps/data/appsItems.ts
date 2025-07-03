interface IAppsItems {
  href: string,
  imageUrl: string,
  width: string,
  backgroundPositionX: string,
  label?: string
}

export const appsItems: IAppsItems[] = [
  {
    href: "/download-desktop",
    imageUrl: "/images/templates/for-research/apps/download.svg",
    width: "31px",
    backgroundPositionX: "0",
    label: "ForWindows", 
  },
  {
    href: "/download-desktop",
    imageUrl: "/images/templates/for-research/apps/download.svg",
    width: "31px",
    backgroundPositionX: "-25px",
    label: "ForLinux", 
  },
  {
    href: "/download-desktop",
    imageUrl: "/images/templates/for-research/apps/download.svg",
    width: "31px",
    backgroundPositionX: "-61px",
    label: "ForMacOS", 
  },
  {
    href: "/download-desktop",
    imageUrl: "/images/templates/for-research/apps/download.svg",
    width: "125px",
    backgroundPositionX: "-97px"
  },
  {
    href: "/download-desktop",
    imageUrl: "/images/templates/for-research/apps/download.svg",
    width: "130px",
    backgroundPositionX: "-223px"
  },
];
