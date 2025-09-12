import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/e-book/learn-more/blog.svg"),
    heading: { label: "Blog" },
    text: "BlogDesc",
    links: [
      {
        href: "BlogLink",
        label: "ReadStory",
      },
    ],
  },
  {
    imgUrl: "TutorialsImgUrl",
    heading: { label: "Blog" },
    text: "TutorialsDesc",
    links: [
      {
        href: "TutorialsLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/e-book/learn-more/hints.svg"),
    heading: { label: "Blog" },
    text: "HintsDesc",
    links: [
      {
        href: "HintsLink",
        label: "LearnMore",
      },
    ],
  },
];
