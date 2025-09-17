import { IBlogCard } from "@src/components/widgets/BlogCard";

export const items: IBlogCard[] = [
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-1.png",
    heading: { label: "Guide" },
    text: "WorkingOnDocuments",
    links: [
      {
        href: "https://medium.com/onlyoffice/working-on-documents-within-odoo-257d6552691d",
        label: "Explore",
        isExternal: true,
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-2.png",
    heading: { label: "Blog" },
    text: "WorkWithFillableTemplates",
    links: [
      {
        href: "WorkWithFillableTemplatesLink",
        label: "LearnMore",
      },
    ],
  },
  {
    imgUrl: "/images/templates/office-for-odoo/learn-more/blog-3.png",
    heading: { label: "Blog" },
    text: "ADetailedGuideOnCreating",
    links: [
      {
        href: "ADetailedGuideOnCreatingLink",
        label: "LearnMore",
      },
    ],
  },
];
