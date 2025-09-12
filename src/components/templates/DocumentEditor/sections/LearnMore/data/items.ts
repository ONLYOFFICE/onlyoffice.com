import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/document-editor/learn-more/blog.png"),
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
    imgUrl: getAssetUrl("/images/templates/document-editor/learn-more/tutorial.png"),
    heading: { label: "Tutorials" },
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
    imgUrl: getAssetUrl("/images/templates/document-editor/learn-more/hints.png"),
    heading: { label: "Hints" },
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
