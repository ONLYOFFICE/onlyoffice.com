import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/public-rooms/learn-more/blog.png",
    heading: "Blog",
    text: "BlogDesc",
    links: [
      {
        href: "BlogLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: "/images/templates/public-rooms/learn-more/docspace.png",
    heading: "YouTube",
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
    imgUrl: "/images/templates/public-rooms/learn-more/tutorial.png",
    heading: "Tutorial",
    text: "TutorialDesc",
    links: [
      {
        href: "HelpCenterLink",
        label: "LearnMore",
      },
    ],
  },
];
