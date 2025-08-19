interface IItems {
  id: string;
  href?: string;
  title: string;
  icons: {
    href?: string;
    positionX: number;
  }[];
}

export const items: IItems[] = [
  {
    id: "web",
    href: "/office-suite",
    title: "Web",
    icons: [
      {
        positionX: 0,
      },
    ],
  },
  {
    id: "desktop",
    href: "/download-desktop",
    title: "Desktop",
    icons: [
      {
        positionX: -48,
      },
      {
        positionX: -98,
      },
      {
        positionX: -146,
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icons: [
      {
        href: "/office-for-android",
        positionX: -196,
      },
      {
        href: "/office-for-ios",
        positionX: -248,
      },
    ],
  },
];
