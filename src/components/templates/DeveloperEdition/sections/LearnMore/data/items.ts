import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/developer-edition/learn-more/whitepaper.png",
    heading: { label: "WhitepaperTitle" },
    text: "WhitepaperDescription",
    links: [
      {
        href: "ReportLink",
        label: "OpenReport",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "YoutubeImgUrl",
    heading: { label: "VideoTitle" },
    text: "VideoDescription",
    links: [
      {
        href: "YoutubeLink",
        label: "WatchNow",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/developer-edition/learn-more/blog.png",
    heading: { label: "BlogTitle" },
    text: "BlogDescription",
    links: [
      {
        href: "BlogLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
];
