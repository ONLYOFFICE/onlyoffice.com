import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/public-rooms/learn-more/blog.png"),
    heading: { label: "Blog" },
    text: "BlogDesc",
    links: [
      {
        href: "BlogLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/public-rooms/learn-more/docspace.png"),
    heading: { label: "YouTube" },
    text: "MasterONLYOFFICEDocSpace",
    links: [
      {
        href: "MasterONLYOFFICEDocSpaceLink",
        label: "WatchNow",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/public-rooms/learn-more/tutorial.png"),
    heading: { label: "Tutorial" },
    text: "TutorialDesc",
    links: [
      {
        href: "HelpCenterLink",
        label: "LearnMore",
      },
    ],
  },
];
