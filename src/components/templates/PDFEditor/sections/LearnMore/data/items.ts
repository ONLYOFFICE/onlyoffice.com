import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/pdf-editor/learn-more/blog.png"),
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
    imgUrl: getAssetUrl("/images/templates/pdf-editor/learn-more/tutorial.png"),
    heading: { label: "Blog" },
    text: "TutorialsDesc",
    links: [
      {
        href: "TutorialsLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/pdf-editor/learn-more/hints.png"),
    heading: { label: "Blog" },
    text: "HintsDesc",
    links: [
      {
        href: "HintsLink",
        label: "LearnMore",
        isExternal: true,
      },
    ],
  },
];
