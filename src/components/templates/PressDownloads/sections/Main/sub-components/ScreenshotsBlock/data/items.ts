interface IScreenshotsBlockItem {
  title: string;
  description: string;
  src: string;
  imgUrl: string;
}

export const items: IScreenshotsBlockItem[] = [
  {
    title: "OnlineEditors",
    description: "OnlineEditorsText",
    src: "OnlineEditorsLink",
    imgUrl: "OnlineEditorsImgUrl",
  },
  {
    title: "DocSpace",
    description: "DocSpaceText",
    src: "DocSpaceLink",
    imgUrl: "DocSpaceImgUrl",
  },
  {
    title: "Workspace",
    description: "WorkspaceText",
    src: "WorkspaceLink",
    imgUrl: "WorkspaceImgUrl",
  },
  {
    title: "DesktopApps",
    description: "DesktopAppsText",
    src: "DesktopAppsLink",
    imgUrl: "DesktopAppsImgUrl",
  },
  {
    title: "MobileApps",
    description: "MobileAppsText",
    src: "MobileAppsLink",
    imgUrl: "MobileAppsImgUrl",
  },
];
