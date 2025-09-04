import { IGetAccessItems } from "../../../NonprofitOrganizations.types";

const items: IGetAccessItems[] = [
  {
    id: 1,
    href: "/download-desktop",
    label: "ForWindows",
    iconUrl: "/images/templates/nonprofit-organizations/get-access/windows.svg"
  },
  {
    id: 2,
    href: "/download-desktop",
    label: "ForLinux",
    iconUrl: "/images/templates/nonprofit-organizations/get-access/linux.svg"
  },
  {
    id: 3,
    href: "/download-desktop",
    label: "ForMacOS",
    iconUrl: "/images/templates/nonprofit-organizations/get-access/apple.svg"
  },
  {
    id: 4,
    href: "AppStoreLinkUrl",
    label: "",
    iconUrl: "AppStoreLogoUrl"
  },
  {
    id: 5,
    href: "GooglePlayLinkUrl",
    label: "",
    iconUrl: "GooglePlayLogoUrl"
  }
];

export { items };