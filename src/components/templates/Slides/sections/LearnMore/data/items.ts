import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/document-editor/learn-more/blog.png",
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
    imgUrl: "/images/templates/document-editor/learn-more/tutorial.png",
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
    imgUrl: "/images/templates/document-editor/learn-more/hints.png",
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
