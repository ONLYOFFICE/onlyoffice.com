interface ILoadingText {
  key: string;
  link: {
    href: string;
    isExternal?: boolean;
  };
}

export const loadingText: ILoadingText[] = [
  {
    key: "WorkFasterOnYourDocuments",
    link: {
      href: "/ai-assistants",
    },
  },
  {
    key: "DownloadEasyEditableOnline",
    link: {
      href: "templatesLink",
      isExternal: true,
    },
  },
  {
    key: "GetFreeOfficeApps",
    link: {
      href: "/download-desktop",
    },
  },
];
