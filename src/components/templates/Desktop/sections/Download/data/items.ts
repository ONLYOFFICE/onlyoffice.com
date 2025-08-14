import { IDownloadButton } from "@src/components/ui/DownloadButton";

export const items: IDownloadButton[] = [
  {
    href: "/download-desktop",
    platform: "windows",
    variant: "quaternary",
  },
  {
    href: "/download-desktop",
    platform: "linux",
    variant: "quaternary",
  },
  {
    href: "/download-desktop",
    platform: "macos",
    variant: "quaternary",
  },
  {
    href: "https://snapcraft.io/onlyoffice-desktopeditors",
    platform: "snap-store",
    variant: "quaternary",
  },
];
