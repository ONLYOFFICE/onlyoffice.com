import { IBlogCard } from "@src/components/widgets/BlogCard";

import { getAssetUrl } from "@utils/getAssetUrl";
export const items: IBlogCard[] = [
  {
    imgUrl: getAssetUrl("/images/templates/form-creator/learn-more/blog.png"),
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
    imgUrl: getAssetUrl("/images/templates/form-creator/learn-more/tutorial.png"),
    heading: { label: "HelpCenter" },
    text: "TutorialsDesc",
    links: [
      {
        href: "TutorialsLink",
        label: "CheckUserGuides",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: getAssetUrl("/images/templates/form-creator/learn-more/hints.png"),
    heading: { label: "HelpCenter" },
    text: "HintsDesc",
    links: [
      {
        href: "HintsLink",
        label: "CheckUserGuides",
        isExternal: true,
      },
    ],
  },
];
