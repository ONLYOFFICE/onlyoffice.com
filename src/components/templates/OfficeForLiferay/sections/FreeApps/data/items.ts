import { ISolutionCard } from "@src/components/widgets/SolutionCard";
import { IDownloadButton } from "@src/components/ui/DownloadButton";

export interface ISolutionCardExtended
  extends Omit<ISolutionCard, "customLinks"> {
  customLinks?: {
    id?: string;
    label?: string;
    platform?: IDownloadButton["platform"];
    url: string;
    isExternal?: boolean;
  }[];
}

export const items: ISolutionCardExtended[] = [
  {
    imgUrl: "/images/templates/office-for-liferay/free-apps/desktop.svg",
    text: "FreeAppsDesktopText",
    customLinks: [
      {
        id: "free-apps-free-desktop-apps",
        label: "GetFreeDesktopApps",
        url: "/download-desktop?from=officeforliferay",
        isExternal: false,
      },
    ],
  },
];
