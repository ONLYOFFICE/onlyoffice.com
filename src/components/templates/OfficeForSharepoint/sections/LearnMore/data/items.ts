import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/office-for-sharepoint/learn-more/card1.png"),
    heading: { label: "Video" },
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
    imgUrl: getAssetUrl("/images/templates/office-for-sharepoint/learn-more/card2.png"),
    heading: { label: "Compare" },
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
    imgUrl: getAssetUrl("/images/templates/office-for-sharepoint/learn-more/card3.png"),
    heading: { label: "HelpCenter" },
    text: "HelpCenterDesc",
    links: [
      {
        href: "HelpCenterLinkUrl",
        label: "HelpCenterLink",
        isExternal: true,
      },
    ],
  },
];
