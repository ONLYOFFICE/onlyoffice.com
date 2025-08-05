import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/form-creator/learn-more/blog.png",
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
    imgUrl: "/images/templates/form-creator/learn-more/tutorial.png",
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
    imgUrl: "/images/templates/form-creator/learn-more/hints.png",
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
