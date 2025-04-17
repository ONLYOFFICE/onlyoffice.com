import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/office-for-sharepoint/learn-more/card1.png",
    heading: "Video",
    text: "VideoDesc",
    links: [
      {
        href: "https://youtu.be/5rN7CksWE-w",
        label: "VideoLink",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-sharepoint/learn-more/card2.png",
    heading: "Compare",
    text: "CompareDesc",
    links: [
      {
        href: "/best-microsoft-office-alternative",
        label: "CompareLink",
        isExternal: false,
      },
    ],
  },
  {
    imgUrl:
      "/images/templates/office-for-sharepoint/learn-more/card3.png",
    heading: "HelpCenter",
    text: "HelpCenterDesc",
    links: [
      {
        href: "https://helpcenter.onlyoffice.com/integration/gettingstarted-sharepoint.aspx#WOPI_block",
        label: "HelpCenterLink",
      },
    ],
  },
];
