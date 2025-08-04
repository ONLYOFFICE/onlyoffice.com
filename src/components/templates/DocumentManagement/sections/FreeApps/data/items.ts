import { IDownloadButton } from "@src/components/ui/DownloadButton";

interface IDownloadButtonExtended extends Omit<IDownloadButton, "href"> {
  href: {
    src: string;
    isExternal?: boolean;
  };
}

export const freeAppsItems: IDownloadButtonExtended[] = [
  {
    platform: "windows",
    href: {
      src: "/download-desktop?from=document-management",
    },
  },
  {
    platform: "linux",
    href: {
      src: "/download-desktop?from=document-management",
    },
  },
  {
    platform: "macos",
    href: {
      src: "/download-desktop?from=document-management",
    },
  },
  {
    platform: "app-store",
    href: {
      src: "https://apps.apple.com/us/app/onlyoffice-documents/id944896972",
      isExternal: true,
    },
  },
  {
    platform: "google-play",
    href: {
      src: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents",
      isExternal: true,
    },
  },
];
