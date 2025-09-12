import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: "YoutubeImgUrl",
    heading: { label: "YouTube" },
    text: "YoutubeCardText",
    links: [
      {
        href: "YoutubeLink",
        label: "WatchNow",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/docspace/learn-more/blog.png"),
    heading: { label: "Blog" },
    text: "BlogCardText",
    links: [
      {
        href: "BlogLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/docspace/learn-more/hints.png"),
    heading: { label: "Hints" },
    text: "HintsCardText",
    links: [
      {
        href: "HintsLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
];
