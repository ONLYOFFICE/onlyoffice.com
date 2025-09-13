import { IBlogCard } from "@src/components/widgets/BlogCard";

interface IBlogCardItem extends IBlogCard {
  zhImgUrl?: string;
}

export const items: IBlogCardItem[] = [
  {
    imgUrl: "/images/templates/ai-assistants/learn-more/ai_blog_1.png",
    zhImgUrl: "/images/templates/ai-assistants/learn-more/ai_blog_1_zh.png",
    heading: { label: "Blog" },
    text: "FAQ",
    links: [
      {
        href: "FAQLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: "/images/templates/ai-assistants/learn-more/ai_blog_2.png",
    heading: { label: "Blog" },
    text: "TopAITools",
    links: [
      {
        href: "TopAIToolsLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: "/images/templates/ai-assistants/learn-more/ai_blog_3.png",
    heading: { label: "Blog" },
    text: "HowToAdd",
    links: [
      {
        href: "HowToAddLink",
        label: "LearnMore",
      },
    ],
  },
];
