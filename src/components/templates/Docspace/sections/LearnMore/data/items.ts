import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "YoutubeImgUrl",
    heading: { label: "YouTube" },
    text: "YoutubeCardText",
    links: [
      {
        href: "YoutubeLink",
        label: "Watch now",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/docspace/learn-more/blog.png",
    heading: { label: "Blog" },
    text: "BlogCardText",
    links: [
      {
        href: "BlogLink",
        label: "Learn more",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/docspace/learn-more/hints.png",
    heading: { label: "Hints" },
    text: "HintsCardText",
    links: [
      {
        href: "HintsLink",
        label: "Learn more",
        isExternal: true,
      },
    ],
  },
];
