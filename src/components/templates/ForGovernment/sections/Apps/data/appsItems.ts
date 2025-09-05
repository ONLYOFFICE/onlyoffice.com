import { IDownloadButton } from "@src/components/ui/DownloadButton";

export const appsItems: IDownloadButton[] = [
  {
    href: "/download-desktop",
    platform: "windows",
    variant: "quaternary",
  },
  {
    href: "/download-desktop",
    platform: "linux",
  },
  {
    href: "/download-desktop",
    platform: "macos",
  },
  {
    href: "https://itunes.apple.com/us/app/onlyoffice-documents/id944896972",
    platform: "app-store",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents",
    platform: "google-play",
  },
];
