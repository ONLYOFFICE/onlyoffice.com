import { IBlogCard } from "@src/components/widgets/BlogCard";


export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/pdf-editor/learn-more/blog.png"  ,
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
    imgUrl: "/images/templates/pdf-editor/learn-more/tutorial.png",
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
    imgUrl: "/images/templates/pdf-editor/learn-more/hints.png",
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
